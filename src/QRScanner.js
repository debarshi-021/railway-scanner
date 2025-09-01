import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

export default function QRScanner() {
  const [uid, setUid] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Railway UID QR Scanner</h2>

      <QrReader
        constraints={{ facingMode: "environment" }} // back camera on phone
        onResult={(result, error) => {
          if (!!result) {
            setUid(result?.text); // capture UID from QR
          }
        }}
        style={{ width: "300px", margin: "0 auto" }}
      />

      <div style={{ marginTop: "20px" }}>
        {uid ? (
          <h3>Scanned UID: {uid}</h3>
        ) : (
          <p>Point camera at QR code...</p>
        )}
      </div>
    </div>
  );
}
