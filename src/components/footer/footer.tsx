import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export default component$(() => {
  return (
    <footer class={styles.footer}>
      <div class={styles.row}>
        <div class={styles.column}>
          <div class={styles.aboutUs}>
            <h4>About Us</h4>
            <p>An awesome minecraft server</p>
          </div>

          <div class={styles.contact}>
            <h4>Contact Me</h4>
            <p>Email: <a href="mailto:info@g9aerospace.in">info@g9aerospace.in</a></p>
          </div>
        </div>

        <div class={styles.column}>
          <div class={styles.privacyTerms}>
            <h4>Links</h4>
            <a href="/privacy-policy" class={styles.link}>Privacy Policy</a>
            <br></br>
            <a href="/terms-of-service" class={styles.link}>Terms of Service</a>
            <br></br>
            <a href="/cookies-policy" class={styles.link}>Cookies Policy</a>
          </div>
        </div>

        <div class={styles.column}>
          <div class={styles.partnerships}>
            <h4>Partnerships</h4>
            <p>We are open to collaborations</p>
            <p>Partnership: <a href="mailto:partnership@g9aerospace.in">partnership@g9aerospace.in</a></p>

            {/* Social Media Icons */}
            <h4>Stay Connected</h4>
            <div class={styles.socialIcons}>

              <a href="https://github.com/Craftersgg" target="_blank">
                <img src="https://img.icons8.com/?size=256&id=52539&format=png" alt="GitHub" style={{ maxHeight: '30px' }} />
              </a>

              <a href="https://discord.gg/w5NyCHz3HB" target="_blank">
                <img src="https://img.icons8.com/?size=256&id=30998&format=png" alt="Discord" style={{ maxHeight: '30px' }} />
              </a>

            </div>
          </div>
        </div>

        <div class={styles.copyrightBox}>
          <div class={styles.copyright}>
            <p>&copy; 2024 CraftersGG. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
});
