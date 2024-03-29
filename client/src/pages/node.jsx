import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// ----------------------------------------------------------------------

export default function NodePage() {
  return (
    <>
      <Helmet>
        <title> Node | Minimal UI </title>
      </Helmet>

      <Outlet />
    </>
  );
}
