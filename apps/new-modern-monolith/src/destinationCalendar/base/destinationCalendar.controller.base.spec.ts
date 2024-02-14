import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { DestinationCalendarController } from "../destinationCalendar.controller";
import { DestinationCalendarService } from "../destinationCalendar.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  booking: 42,
  externalId: "exampleExternalId",
  id: 42,
  integration: "exampleIntegration",
};
const CREATE_RESULT = {
  booking: 42,
  externalId: "exampleExternalId",
  id: 42,
  integration: "exampleIntegration",
};
const FIND_MANY_RESULT = [
  {
    booking: 42,
    externalId: "exampleExternalId",
    id: 42,
    integration: "exampleIntegration",
  },
];
const FIND_ONE_RESULT = {
  booking: 42,
  externalId: "exampleExternalId",
  id: 42,
  integration: "exampleIntegration",
};

const service = {
  createDestinationCalendar() {
    return CREATE_RESULT;
  },
  destinationCalendars: () => FIND_MANY_RESULT,
  destinationCalendar: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("DestinationCalendar", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DestinationCalendarService,
          useValue: service,
        },
      ],
      controllers: [DestinationCalendarController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /destinationCalendars", async () => {
    await request(app.getHttpServer())
      .post("/destinationCalendars")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /destinationCalendars", async () => {
    await request(app.getHttpServer())
      .get("/destinationCalendars")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /destinationCalendars/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/destinationCalendars"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /destinationCalendars/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/destinationCalendars"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /destinationCalendars existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/destinationCalendars")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/destinationCalendars")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
