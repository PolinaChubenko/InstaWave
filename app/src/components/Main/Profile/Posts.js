import style from "./Profile.module.css";

const Posts = () => {
    return (
        <div className={style.posts_wrapper}>
            <div></div>
            <div className={style.posts_table}>
                <div className={style.posts_row}>
                    <div className={style.posts_column}>
                        <h2>Column 1</h2>
                        <p>Some text..</p>
                    </div>
                    <div className={style.posts_column}>
                        <h2>Column 2</h2>
                        <p>Some text..</p>
                    </div>
                    <div className={style.posts_column}>
                        <h2>Column 3</h2>
                        <p>Some text..</p>
                    </div>
                </div>
                <div className={style.posts_row}>
                    <div className={style.posts_column}>
                        <h2>Column 1</h2>
                        <p>Some text..</p>
                    </div>
                    <div className={style.posts_column}>
                        <h2>Column 2</h2>
                        <p>Some text..</p>
                    </div>
                    <div className={style.posts_column}>
                        <h2>Column 3</h2>
                        <p>Some text..</p>
                    </div>
                </div>
                <div className={style.posts_row}>
                    <div className={style.posts_column}>
                        <h2>Column 1</h2>
                        <p>Some text..</p>
                    </div>
                    <div className={style.posts_column}>
                        <h2>Column 2</h2>
                        <p>Some text..</p>
                    </div>
                    <div className={style.posts_column}>
                        <h2>Column 3</h2>
                        <p>Some text..</p>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Posts;