import { Helmet } from 'react-helmet-async';

import { ErrorDataView } from 'src/sections/errorData/view';

// ----------------------------------------------------------------------

export default function ErrorDataPage() {
  return (
    <>
      <Helmet>
        <title> Error Data | Minimal UI </title>
      </Helmet>

      <ErrorDataView />
    </>
  );
}
