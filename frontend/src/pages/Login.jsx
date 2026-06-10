import axios from "axios";
import "../pages/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      navigate("/dashboard");
    } catch (err) {
      alert(
        err.response?.data?.message ||
        "Login failed"
      );
    }
  };

  return (
    <div className="login-page">

      {/* ── Left Illustration Panel ── */}
      <div className="login-illustration">

        <div className="illus-brand">
          NexusCRM <span>🐦‍🔥</span>
        </div>

        <div className="illus-tagline">
          Your leads. Your pipeline.<br />
          All in one place.
        </div>

        {/* Inline SVG illustration */}
        <svg
          className="illus-svg"
          viewBox="0 0 420 340"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* ── Background card shadows ── */}
          <rect x="28" y="60" width="364" height="220" rx="20" fill="rgba(255,255,255,0.06)" />

          {/* ── Main dashboard card ── */}
          <rect x="14" y="48" width="364" height="220" rx="18" fill="rgba(255,255,255,0.13)" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2" />

          {/* ── Top bar ── */}
          <rect x="14" y="48" width="364" height="44" rx="18" fill="rgba(255,255,255,0.18)" />
          <rect x="14" y="74" width="364" height="18" fill="rgba(255,255,255,0.18)" />

          {/* Window dots */}
          <circle cx="42" cy="70" r="5" fill="#ef9a9a" />
          <circle cx="58" cy="70" r="5" fill="#fff59d" />
          <circle cx="74" cy="70" r="5" fill="#a5d6a7" />

          {/* Tab labels */}
          <rect x="100" y="63" width="52" height="14" rx="4" fill="rgba(255,255,255,0.3)" />
          <rect x="162" y="63" width="40" height="14" rx="4" fill="rgba(255,255,255,0.12)" />
          <rect x="212" y="63" width="40" height="14" rx="4" fill="rgba(255,255,255,0.12)" />

          {/* ── Stat mini-cards row ── */}
          {/* Card 1 */}
          <rect x="30" y="108" width="78" height="54" rx="10" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <rect x="40" y="116" width="36" height="7" rx="3" fill="rgba(255,255,255,0.4)" />
          <text x="40" y="148" fontFamily="Inter,sans-serif" fontSize="18" fontWeight="700" fill="white" opacity="0.95">48</text>

          {/* Card 2 */}
          <rect x="120" y="108" width="78" height="54" rx="10" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <rect x="130" y="116" width="44" height="7" rx="3" fill="rgba(255,255,255,0.4)" />
          <text x="130" y="148" fontFamily="Inter,sans-serif" fontSize="18" fontWeight="700" fill="white" opacity="0.95">31</text>

          {/* Card 3 */}
          <rect x="210" y="108" width="78" height="54" rx="10" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <rect x="220" y="116" width="40" height="7" rx="3" fill="rgba(255,255,255,0.4)" />
          <text x="220" y="148" fontFamily="Inter,sans-serif" fontSize="18" fontWeight="700" fill="white" opacity="0.95">12</text>

          {/* Card 4 */}
          <rect x="300" y="108" width="64" height="54" rx="10" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <rect x="310" y="116" width="36" height="7" rx="3" fill="rgba(255,255,255,0.4)" />
          <text x="310" y="148" fontFamily="Inter,sans-serif" fontSize="18" fontWeight="700" fill="white" opacity="0.95">75%</text>

          {/* ── Bar Chart ── */}
          <rect x="30" y="176" width="168" height="78" rx="10" fill="rgba(255,255,255,0.10)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

          {/* Chart grid lines */}
          <line x1="44" y1="235" x2="184" y2="235" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <line x1="44" y1="220" x2="184" y2="220" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <line x1="44" y1="205" x2="184" y2="205" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

          {/* Bars */}
          <rect x="50"  y="210" width="14" height="25" rx="4" fill="rgba(255,255,255,0.55)" />
          <rect x="72"  y="200" width="14" height="35" rx="4" fill="rgba(255,255,255,0.75)" />
          <rect x="94"  y="218" width="14" height="17" rx="4" fill="rgba(255,255,255,0.45)" />
          <rect x="116" y="192" width="14" height="43" rx="4" fill="white" />
          <rect x="138" y="205" width="14" height="30" rx="4" fill="rgba(255,255,255,0.65)" />
          <rect x="160" y="213" width="14" height="22" rx="4" fill="rgba(255,255,255,0.5)" />

          {/* ── Pipeline funnel / donut area ── */}
          <rect x="210" y="176" width="154" height="78" rx="10" fill="rgba(255,255,255,0.10)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

          {/* Donut ring */}
          <circle cx="287" cy="215" r="28" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="13" />
          <circle cx="287" cy="215" r="28" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="13"
            strokeDasharray="88 88" strokeDashoffset="22" strokeLinecap="round" />
          <circle cx="287" cy="215" r="28" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="13"
            strokeDasharray="44 132" strokeDashoffset="-66" strokeLinecap="round" />
          <text x="287" y="220" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="700" fill="white">75%</text>

          {/* ── Lead rows (mini table) ── */}
          <rect x="30" y="268" width="340" height="9" rx="4" fill="rgba(255,255,255,0.18)" />
          <rect x="30" y="283" width="280" height="7" rx="3" fill="rgba(255,255,255,0.10)" />
          <rect x="30" y="295" width="310" height="7" rx="3" fill="rgba(255,255,255,0.10)" />

          {/* ── Floating notification pill ── */}
          <rect x="252" y="26" width="130" height="28" rx="14" fill="white" opacity="0.95" />
          <circle cx="270" cy="40" r="7" fill="#c5cae9" />
          <circle cx="270" cy="40" r="4" fill="#5c6bc0" />
          <rect x="282" y="33" width="60" height="6" rx="3" fill="#e8eaf6" />
          <rect x="282" y="43" width="40" height="5" rx="2.5" fill="#ede7f6" />

          {/* ── Floating avatar cluster (bottom-left) ── */}
          <circle cx="60" cy="316" r="14" fill="#7986cb" />
          <circle cx="82" cy="316" r="14" fill="#9575cd" stroke="white" strokeWidth="2" />
          <circle cx="104" cy="316" r="14" fill="#5c6bc0" stroke="white" strokeWidth="2" />
          <text x="60"  y="321" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="600" fill="white">AJ</text>
          <text x="82"  y="321" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="600" fill="white">KM</text>
          <text x="104" y="321" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="600" fill="white">+4</text>

          <rect x="126" y="308" width="90" height="7" rx="3" fill="rgba(255,255,255,0.5)" />
          <rect x="126" y="320" width="60" height="6" rx="3" fill="rgba(255,255,255,0.28)" />
        </svg>

        <div className="illus-dots">
          <span className="dot dot-active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>

      </div>

      {/* ── Right Login Card ── */}
      <div className="login-card">

        <h2>NexusCRM 🐦‍🔥</h2>

        <p className="login-subtitle">
          Admin Portal
        </p>

        <input
          className="login-input"
          placeholder="Email Address"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <div className="password-container">

          <input
            className="login-input"
            type={
              showPassword
                ? "text"
                : "password"
            }
            placeholder="Password"
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <span
            className="eye-icon"
            onClick={() =>
              setShowPassword(
                !showPassword
              )
            }
          >
            {showPassword ? "⌣" : "👁"}
          </span>

        </div>

        <button
          className="login-btn"
          onClick={login}
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;