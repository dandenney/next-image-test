import Image from "next/image";
import styles from "./page.module.css";

import imgMissingSomethingOriginal from "../public/missing-something.jpeg";
import imgMissingSomethingFixedSrcSet from "../public/missing-something-fixed.jpeg";
import imgMissingSomethingFillDefault from "../public/missing-something-fill-default.jpeg";
import imgMissingSomethingFillSizes from "../public/missing-something-fill-sizes.jpeg";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h2>HTML Img Element</h2>
        <p>
          To get the desired result of an image never larger than the display
          width at 2x resolution for retina, I created 4 webp files: 400px,
          600px, 800px, and 1200px wide. At full width, it's 61kb based on what
          I uploaded.
        </p>
        <p>
          <img
            alt="AI generated photo of someone working on a laptop and yet it's facing away from them"
            src="https://www.dandenney.com/img/posts/front-end-dev/im-missing-something-with-next-image/missing-something.webp"
            srcSet="https://www.dandenney.com/img/posts/front-end-dev/im-missing-something-with-next-image/missing-something-400.webp 400w, https://www.dandenney.com/img/posts/front-end-dev/im-missing-something-with-next-image/missing-something-600.webp 600w, https://www.dandenney.com/img/posts/front-end-dev/im-missing-something-with-next-image/missing-something-800.webp 800w, https://www.dandenney.com/img/posts/front-end-dev/im-missing-something-with-next-image/missing-something-1200.webp 1200w"
          />
        </p>
      </section>
      <section className={styles.section}>
        <h2>Fixed width using Next and the public folder</h2>
        <p>
          I imported the original image into the public folder and used height
          and width to set the size of the image. At all viewport sizes, it's
          52.7kb thanks to beter optimization from Next, but 1200x673.
        </p>
        <p>
          <Image
            alt="AI generated photo of someone working on a laptop and yet it's facing away from them"
            src={imgMissingSomethingOriginal}
            width={600}
            height={400}
          />
        </p>
        <p>
          I imported the original image into the public folder, used height and
          width, plus added sizes. On small viewports I get a 640px width image
          that's 25.7kb and on larger I get the expected 1200px width and
          52.7kb.
        </p>
        <p>
          <Image
            alt="AI generated photo of someone working on a laptop and yet it's facing away from them"
            sizes="(max-width: 600px) 300px, 600px"
            src={imgMissingSomethingFixedSrcSet}
            width={600}
            height={400}
          />
        </p>
      </section>
      <section className={styles.section}>
        <h2>"Fill" option using Next and the public folder</h2>
        <p>
          I imported the original image into the public folder and used{" "}
          <code>
            fill=
            {true}
          </code>
          . Here, I have to also make the paragraph relative and set an aspect
          ratio on it to allow the image to fill the space. The image is the
          full 2912x1632 and weights 149kb.
        </p>
        <p class="img-container">
          <Image
            alt="AI generated photo of someone working on a laptop and yet it's facing away from them"
            src={imgMissingSomethingFillDefault}
          />
        </p>
        <p>
          I imported the original, used <code>fill={true}</code>, and added
          sizes to restrict the options.
        </p>
        <p>
          <Image
            alt="AI generated photo of someone working on a laptop and yet it's facing away from them"
            sizes="(max-width: 600px) 300px, 600px"
            src={imgMissingSomethingFillSizes}
          />
        </p>
      </section>
    </main>
  );
}
