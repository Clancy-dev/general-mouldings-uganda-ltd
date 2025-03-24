import type * as React from "react"

interface EmailTemplateProps {
  name?: string
  email?: string
  subject?: string
  message?: string
  firstName?: string // Keep this for backward compatibility
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ name, email, subject, message, firstName }) => (
  <div
    style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      maxWidth: "600px",
      margin: "0 auto",
      padding: "0",
      color: "#333333",
    }}
  >
    {/* Header with Logo */}
    <div
      style={{
        backgroundColor: "#f8fafc",
        padding: "30px 0",
        textAlign: "center",
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
        borderBottom: "1px solid #e2e8f0",
      }}
    >
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.PNG-YIxgPuZzefF1DQz7Fg5BnVkHMCxpK4.png"
        alt="General Mouldings Logo"
        width="90"
        style={{
          display: "block",
          margin: "0 auto",
        }}
      />
      <h1
        style={{
          color: "#1e40af",
          fontSize: "24px",
          margin: "20px 0 0",
          fontWeight: "600",
        }}
      >
        New Contact Form Submission
      </h1>
    </div>

    {/* Email Body */}
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "30px",
        borderBottomLeftRadius: "8px",
        borderBottomRightRadius: "8px",
      }}
    >
      {firstName && <p style={{ fontSize: "16px", lineHeight: "1.5", marginBottom: "24px" }}>Hello, {firstName}!</p>}

      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.5",
          marginBottom: "24px",
          color: "#4b5563",
        }}
      >
        You have received a new message from your website contact form. Here are the details:
      </p>

      <div
        style={{
          backgroundColor: "#f9fafb",
          borderRadius: "8px",
          padding: "24px",
          marginBottom: "24px",
        }}
      >
        {name && (
          <div style={{ marginBottom: "16px" }}>
            <p
              style={{
                fontWeight: "600",
                fontSize: "14px",
                textTransform: "uppercase",
                color: "#6b7280",
                marginBottom: "4px",
                letterSpacing: "0.05em",
              }}
            >
              Name
            </p>
            <p
              style={{
                fontSize: "16px",
                margin: "0",
                color: "#111827",
              }}
            >
              {name}
            </p>
          </div>
        )}

        {email && (
          <div style={{ marginBottom: "16px" }}>
            <p
              style={{
                fontWeight: "600",
                fontSize: "14px",
                textTransform: "uppercase",
                color: "#6b7280",
                marginBottom: "4px",
                letterSpacing: "0.05em",
              }}
            >
              Email
            </p>
            <p
              style={{
                fontSize: "16px",
                margin: "0",
                color: "#111827",
              }}
            >
              <a href={`mailto:${email}`} style={{ color: "#2563eb", textDecoration: "none" }}>
                {email}
              </a>
            </p>
          </div>
        )}

        {subject && (
          <div style={{ marginBottom: "16px" }}>
            <p
              style={{
                fontWeight: "600",
                fontSize: "14px",
                textTransform: "uppercase",
                color: "#6b7280",
                marginBottom: "4px",
                letterSpacing: "0.05em",
              }}
            >
              Subject
            </p>
            <p
              style={{
                fontSize: "16px",
                margin: "0",
                color: "#111827",
                fontWeight: "500",
              }}
            >
              {subject}
            </p>
          </div>
        )}

        {message && (
          <div>
            <p
              style={{
                fontWeight: "600",
                fontSize: "14px",
                textTransform: "uppercase",
                color: "#6b7280",
                marginBottom: "4px",
                letterSpacing: "0.05em",
              }}
            >
              Message
            </p>
            <p
              style={{
                fontSize: "16px",
                margin: "0",
                color: "#111827",
                whiteSpace: "pre-wrap",
                lineHeight: "1.6",
              }}
            >
              {message}
            </p>
          </div>
        )}
      </div>

      <div
        style={{
          borderTop: "1px solid #e5e7eb",
          paddingTop: "24px",
          marginTop: "24px",
          textAlign: "center",
          color: "#6b7280",
          fontSize: "14px",
        }}
      >
        <p style={{ margin: "0 0 8px" }}>General Mouldings | Kampala, Uganda</p>
        <p style={{ margin: "0" }}>
          <a href="tel:+256123456789" style={{ color: "#2563eb", textDecoration: "none" }}>
          +256 414 250 776
          </a>{" "}
          |
          <a
            href="mailto:info@generalmouldings.com"
            style={{ color: "#2563eb", textDecoration: "none", marginLeft: "8px" }}
          >
            sekhar@gml.co.ug
          </a>
        </p>
      </div>
    </div>
  </div>
)

