import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import './index.css';

import { routes } from "./routesConfig.js";
import { ErrorScreen} from "../src/features/ErrorScreen.jsx"
import { Dashboard } from './features/dashboard/Dashboard.jsx';
import { Login } from './features/auth/Login.jsx';
import { Register } from './features/auth/Register.jsx';
import { AuthLayout } from './features/auth/AuthLayout.jsx';
import { Profile } from './features/auth/Profile.jsx';
import { FarmLayout } from './features/farms/FarmLayout.jsx';
import { FarmScreen } from './features/farms/FarmScreen.jsx';
import { FinancesScreen } from './features/finances/FinancesScreen.jsx';
import { DivisionLayout } from "./features/farms/divisions/DivisionLayout.jsx"
import { DivisionScreen } from "./features/farms/divisions/DivisionScreen.jsx";
import { DivisionOptions } from "./features/farms/divisions/DivisionOptions.jsx";

import { AnimalsScreen } from './features/animals/AnimalsScreen.jsx';
import { ActivitiesScreen } from './features/activities/ActivitiesScreen.jsx';

import { MedsScreen } from './features/medicines/MedsScreen.jsx';

import { SummaryScreen } from './features/summary/SummaryScreen.jsx';

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>

      <Route path={routes.home} element={<SummaryScreen />} />

      <Route element={<AuthLayout />}>
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.register} element={<Register />} />
        <Route path={routes.profile} element={<Profile />} />
      </Route>

      <Route element={<FarmLayout />}>
        <Route path={routes.farm} element={<FarmScreen />} />
      </Route>

      <Route path={routes.division(":id")} element={<DivisionLayout />}>
        <Route index element={<DivisionScreen />} />
        <Route path="options" element={<DivisionOptions />} />
      </Route>

      <Route path={routes.finances} element={<FinancesScreen />} />

      <Route path={routes.animals} element={<AnimalsScreen/>}/>
      <Route path={routes.activities}  element={<ActivitiesScreen/>}/>

      <Route path={routes.medicines} element={<MedsScreen/>}/>

      <Route path={routes.dashboard} element={<Dashboard/>}/>

      <Route path='*' element={<ErrorScreen/>}/>

    </Routes>
  </BrowserRouter>
);

