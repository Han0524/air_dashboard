import { Helmet } from 'react-helmet-async';

import { RawDataView } from 'src/sections/rawData/view';

// ----------------------------------------------------------------------

export default function RawDataPage() {
  return (
    <>
      <Helmet>
        <title> Raw Data | Minimal UI </title>
      </Helmet>

      <RawDataView />
    </>
  );
}
 