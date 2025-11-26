import React, { memo } from "react";

function ChildComponent() {
  // Example 2
  console.log("Child Component Rendered!!");  //
  return (
    <>
      <h3>Child Component Count</h3>
    </>
  );
}
// export default ChildComponent
export default memo(ChildComponent)