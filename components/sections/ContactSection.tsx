
import { ArrowUpRight, Github, Linkedin, Instagram } from "lucide-react";

export function ContactSection() {
  return (
    <footer className="footer section" id="contact">
      <div className="section-top">
        <span>05 / CONTACT</span>
        <span>HAVE SOMETHING IN MIND?</span>
      </div>

      <div className="footer-main">
        <div>
          <p className="eyebrow">LET&apos;S CREATE SOMETHING MEANINGFUL</p>
          <h2>
            LET&apos;S BUILD<br />
            <em>TOGETHER.</em>
          </h2>

          <a
            className="solid-btn"
            href="mailto:shaikyasirahmed07@gmail.com"
          >
            START A CONVERSATION <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="contact-details">
          <span>GET IN TOUCH</span>
          <a href="mailto:shaikyasirahmed07@gmail.com">
            shaikyasirahmed07@gmail.com <ArrowUpRight size={14} />
          </a>

          <span>FIND ME ONLINE</span>

          <a
            href="https://github.com/shaikyasirahmed07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={15} /> GITHUB <ArrowUpRight size={13} />
          </a>

          <a
            href="https://www.linkedin.com/in/shaikyasirahmed07/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={15} /> LINKEDIN <ArrowUpRight size={13} />
          </a>

          <a
            href="https://www.instagram.com/yasirahmed07/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={15} /> INSTAGRAM <ArrowUpRight size={13} />
          </a>
        </div>

        <div className="footer-card">
          <div className="mini-screen">
            <span>YASIR / DIGITAL</span>
            <b>
              BUILD<br />
              <em>BETTER.</em>
            </b>
            <small>SOFTWARE WITH PURPOSE</small>
          </div>
          <p>
            Curious mind.<br />
            Thoughtful execution.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <a className="logo" href="#home">
          YASIR<span>®</span>
        </a>
        <span>DESIGNED &amp; BUILT BY YASIR AHMED · © 2026</span>
        <a href="#home">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}
