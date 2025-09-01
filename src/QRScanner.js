import React, { useState } from "react";
import QrScanner from "react-qr-scanner";

export default function QRScanner() {
  const [uid, setUid] = useState("");

  const handleScan = (data) => {
    if (data) {
      setUid(data.text);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Railway UID QR Scanner</h2>

      <QrScanner
        delay={300}
        onError={handleError}
        onScan={handleScan}
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
