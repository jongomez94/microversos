export function ShareCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#143028",
        color: "#f4efe4",
        padding: "72px",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 28,
          letterSpacing: 4,
          textTransform: "uppercase",
          color: "#e4c36a",
        }}
      >
        El Salvador
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 92, lineHeight: 1 }}>Microversos</div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 36,
            lineHeight: 1.35,
            maxWidth: 920,
          }}
        >
          Bienvenido al microverso fúngico de El Salvador
        </div>
      </div>
      <div style={{ display: "flex", fontSize: 26, color: "#e7dfd0" }}>
        Hongos comestibles y funcionales · Jonathan Gómez
      </div>
    </div>
  );
}
