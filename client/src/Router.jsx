import { Routes, Route } from 'react-router-dom';
import * as Temp from './temp/TemplatePages';

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<Temp.Error />} />
      <Route index element={<Temp.Landing />} />
      <Route path="landing" element={<Temp.Landing />} />

      <Route path="login" element={<Temp.Login />} />
      <Route path="logout" element={<Temp.Logout />} />

      <Route path="home" element={<Temp.Home />} />
      <Route path="report" element={<Temp.Report />} />
      <Route path="inventory" element={<Temp.Inventory />} />

      <Route path="category" element={<Temp.Categories />}>
        <Route path=":id" element={<Temp.Categories />} />
        <Route path="new" element={<Temp.CategoryNew />} />
        <Route path=":id/mod" element={<Temp.CategoryMod />} />
        <Route path=":id/del" element={<Temp.CategoryDel />} />
      </Route>

      <Route path="item" element={<Temp.Items />}>
        <Route path=":id" element={<Temp.Item />} />
        <Route path="new" element={<Temp.ItemNew />} />
        <Route path=":id/mod" element={<Temp.ItemMod />} />
        <Route path=":id/del" element={<Temp.ItemDel />} />
      </Route>

      <Route path="administration" element={<Temp.Administration />} />

      <Route path="city" element={<Temp.Cities />}>
        <Route path=":id" element={<Temp.City />} />
        <Route path="new" element={<Temp.CityNew />} />
        <Route path=":id/mod" element={<Temp.CityMod />} />
        <Route path=":id/del" element={<Temp.CityDel />} />
      </Route>

      <Route path="company" element={<Temp.Companies />}>
        <Route path=":id" element={<Temp.Company />} />
        <Route path="new" element={<Temp.CompanyNew />} />
        <Route path=":id/mod" element={<Temp.CompanyMod />} />
        <Route path=":id/del" element={<Temp.CompanyDel />} />
      </Route>

      <Route path="worker" element={<Temp.Workers />}>
        <Route path=":id" element={<Temp.Worker />} />
        <Route path="new" element={<Temp.WorkerNew />} />
        <Route path=":id/mod" element={<Temp.WorkerMod />} />
        <Route path=":id/del" element={<Temp.WorkerMod />} />
      </Route>

      <Route path="user" element={<Temp.Users />}>
        <Route path=":id" element={<Temp.User />} />
        <Route path="new" element={<Temp.UserNew />} />
        <Route path=":id/mod" element={<Temp.UserMod />} />
        <Route path=":id/del" element={<Temp.UserMod />} />
      </Route>
    </Routes>
  );
};
