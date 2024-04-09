import { component$} from "@builder.io/qwik";
import styles from "./header.module.css";

export default component$(() => {

  const craftersggLogoUrl = "https://github.com/Craftersgg/Icons/blob/main/craftersgg.png?raw=true";

  return (
    <header class={`${styles.header}`}>
      <div class={styles.wrapper}>
        <div class={styles.logo}>
          <img src={craftersggLogoUrl} alt="CraftersGG Logo" class={styles.Logo} width="100" height="100" />
        </div>
        <ul class={styles.navList}>
          <li><a href="/">Home</a></li>
        </ul>
      </div>
    </header>
  );
});