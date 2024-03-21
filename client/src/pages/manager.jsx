import { Helmet } from 'react-helmet-async';

import { ManagerView } from 'src/sections/manager/view';

// ----------------------------------------------------------------------

export default function ManagerPage() {
  return (
    <>
      <Helmet>
        <title> Manager | Minimal UI </title>
      </Helmet>

      <ManagerView />
    </>
  );
}
