import StyledComponentsRegistry from "@/lib/registry";

export const metadata = {
  title: "Bankkaro",
  description: "Bankkaro developed by Nikhil",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#E1E1E1" }}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
