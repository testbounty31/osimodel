document.getElementById("startSimulation").addEventListener("click", startSimulation);

function startSimulation() {
    let osiBox = document.getElementById("osiSimulation");
    let tcpBox = document.getElementById("tcpHandshake");
    let tlsBox = document.getElementById("tlsHandshake");
    let httpBox = document.getElementById("httpHeaders");

    osiBox.innerHTML = "A. Physical Layer (Layer 1): Sending electrical/optical signals over cables or wireless...";
    setTimeout(() => {
        osiBox.innerHTML += "\nB. Data Link Layer (Layer 2): Framing packets and handling MAC addressing...";
        osiBox.innerHTML += "\n- MAC Address Example: 00:1A:2B:3C:4D:5E";
    }, 3000);
    setTimeout(() => {
        osiBox.innerHTML += "\nC. Network Layer (Layer 3): Routing packets using IP...";
        osiBox.innerHTML += "\n- Source IP: 192.168.1.10, Destination IP: 203.0.113.5";
    }, 6000);
    setTimeout(() => {
        tcpBox.innerHTML = "D. Transport Layer (Layer 4): Initiating TCP Handshake...";
        tcpBox.innerHTML += "\n- SYN sent (Client -> Server)";
    }, 9000);
    setTimeout(() => {
        tcpBox.innerHTML += "\n- SYN-ACK received (Server -> Client)";
    }, 12000);
    setTimeout(() => {
        tcpBox.innerHTML += "\n- ACK sent (Client -> Server) - Connection Established!";
    }, 15000);
    
    setTimeout(() => {
        tlsBox.innerHTML = "E. Session Layer (Layer 5): TLS Handshake in progress...";
        tlsBox.innerHTML += "\n- ClientHello sent with supported ciphers";
    }, 18000);
    setTimeout(() => {
        tlsBox.innerHTML += "\n- ServerHello received with chosen cipher and certificate";
    }, 21000);
    setTimeout(() => {
        tlsBox.innerHTML += "\n- Key Exchange and Finished Messages Exchanged";
    }, 24000);
    setTimeout(() => {
        tlsBox.innerHTML += "\n- Secure Connection Established with TLS Encryption!";
    }, 27000);
    
    setTimeout(() => {
        httpBox.innerHTML = "F. Presentation Layer (Layer 6): Processing HTTP Headers...";
        httpBox.innerHTML += "\n- Encoding and Parsing HTTP Request Headers";
    }, 30000);
    setTimeout(() => {
        httpBox.innerHTML += "\n- Security Headers Applied (HSTS, CSP, X-Frame-Options)";
    }, 33000);
    setTimeout(() => {
        httpBox.innerHTML += "\n- Cookies Set with HttpOnly and Secure Flags";
    }, 36000);
    
    setTimeout(() => {
        httpBox.innerHTML += "\nG. Application Layer (Layer 7): HTTP Request Sent to Server!";
    }, 39000);
}
