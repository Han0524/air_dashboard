import { Helmet } from 'react-helmet-async';

import { NodeView } from 'src/sections/node/view';

// ----------------------------------------------------------------------

export default function NodePage() {
  return (
    <>
      <Helmet>
        <title> Node | Minimal UI </title>
      </Helmet>

      <NodeView />
    </>
  );
}
