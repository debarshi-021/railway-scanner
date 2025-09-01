import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

export default function QRScanner() {
  const [uid, setUid] = useState("");

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: { width: 250, height: 250 } },
      false
    );

    scanner.render(
      (decodedText) => {
        setUid(decodedText);   // set UID from QR
        scanner.clear();       // stop scanning after success
      },
      (error) => {
        console.warn(error);
      }
    );
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Railway UID QR Scanner</h2>
      <div id="reader" style={{ width: "300px", margin: "0 auto" }}></div>
      <div style={{ marginTop: "20px" }}>
        {uid ? <h3>Scanned UID: {uid}</h3> : <p>Point camera at QR code...</p>}
      </div>
    </div>
  );
}
