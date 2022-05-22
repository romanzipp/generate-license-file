import React, { FC } from "react";
import { getLibraryMethods } from "./get-library-methods";
import LibraryMethod from "./library-method";

const ApiPage: FC = () => {
  return (
    <>
      <h2>Methods</h2>
      {getLibraryMethods().map(({ name, signatures }) =>
        signatures.map(signature => (
          <LibraryMethod key={name} methodName={name} signature={signature} />
        ))
      )}
    </>
  );
};
export default ApiPage;
