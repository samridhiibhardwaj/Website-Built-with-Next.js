import { PostPreview, Waves } from "../../components";

import styles from "./Blog.module.css";

export default function Blog({ posts }) {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h2>Reading Recommendation</h2>
        <p>Read our latest posts</p>
      </div>

      <div className={styles.grid}>
        {posts.map(({ title, coverImage, date, excerpt, slug, author }) => {
          return (
            <div key={slug} className={styles.postContainer}>
              <PostPreview
                title={title}
                coverImage={coverImage}
                date={date}
                excerpt={excerpt}
                slug={slug}
                title={title}
                author={author}
              />
            </div>
          );
        })}
      </div>
      <Waves image="/images/wave--infinite-grey.svg" />
    </section>
  );
}
