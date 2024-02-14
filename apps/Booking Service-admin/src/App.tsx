import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PaymentList } from "./payment/PaymentList";
import { PaymentCreate } from "./payment/PaymentCreate";
import { PaymentEdit } from "./payment/PaymentEdit";
import { PaymentShow } from "./payment/PaymentShow";
import { DailyEventReferenceList } from "./dailyEventReference/DailyEventReferenceList";
import { DailyEventReferenceCreate } from "./dailyEventReference/DailyEventReferenceCreate";
import { DailyEventReferenceEdit } from "./dailyEventReference/DailyEventReferenceEdit";
import { DailyEventReferenceShow } from "./dailyEventReference/DailyEventReferenceShow";
import { TeamList } from "./team/TeamList";
import { TeamCreate } from "./team/TeamCreate";
import { TeamEdit } from "./team/TeamEdit";
import { TeamShow } from "./team/TeamShow";
import { BookingReferenceList } from "./bookingReference/BookingReferenceList";
import { BookingReferenceCreate } from "./bookingReference/BookingReferenceCreate";
import { BookingReferenceEdit } from "./bookingReference/BookingReferenceEdit";
import { BookingReferenceShow } from "./bookingReference/BookingReferenceShow";
import { HashedLinkList } from "./hashedLink/HashedLinkList";
import { HashedLinkCreate } from "./hashedLink/HashedLinkCreate";
import { HashedLinkEdit } from "./hashedLink/HashedLinkEdit";
import { HashedLinkShow } from "./hashedLink/HashedLinkShow";
import { BookingList } from "./booking/BookingList";
import { BookingCreate } from "./booking/BookingCreate";
import { BookingEdit } from "./booking/BookingEdit";
import { BookingShow } from "./booking/BookingShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Booking Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Payment"
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          show={PaymentShow}
        />
        <Resource
          name="DailyEventReference"
          list={DailyEventReferenceList}
          edit={DailyEventReferenceEdit}
          create={DailyEventReferenceCreate}
          show={DailyEventReferenceShow}
        />
        <Resource
          name="Team"
          list={TeamList}
          edit={TeamEdit}
          create={TeamCreate}
          show={TeamShow}
        />
        <Resource
          name="BookingReference"
          list={BookingReferenceList}
          edit={BookingReferenceEdit}
          create={BookingReferenceCreate}
          show={BookingReferenceShow}
        />
        <Resource
          name="HashedLink"
          list={HashedLinkList}
          edit={HashedLinkEdit}
          create={HashedLinkCreate}
          show={HashedLinkShow}
        />
        <Resource
          name="Booking"
          list={BookingList}
          edit={BookingEdit}
          create={BookingCreate}
          show={BookingShow}
        />
      </Admin>
    </div>
  );
};

export default App;
