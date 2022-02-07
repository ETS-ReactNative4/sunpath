import classes from './SectionTopicsCovered.module.css';
import PageBreak from '../PageBreak/PageBreak';

const SectionTopicsCovered = props => {

    //Section title and Video urls
    const { pageBreakTitle, videoInfo } = props.pageInfo;

    const {
        topicOne: { topicOneTitle, topicOneUrl },
        topicTwo: { topicTwoTitle, topicTwoUrl },
        topicThree: { topicThreeTitle, topicThreeUrl }
    } = videoInfo;

    return (
        <>
            <PageBreak pageBreakTitle={pageBreakTitle} />
            <section className={`${classes['section-topics-covered']} wrapper`}>
                <div className={classes['section-topics-covered__three-column']}>
                    <div>
                        <h2>{topicOneTitle}</h2>
                        <div className={classes['video-container']} >
                            <iframe src={`${topicOneUrl}?autoplay=0&amp;modestbranding=0&amp;controls=1&amp;showinfo=0&amp;rel=0&amp;hd=1&amp;wmode=transparent" frameBorder="0" allowFullScreen="" wmode="opaque" id="fitvid687039`}></iframe>
                        </div>
                        <p>Find out how you can receive an 8 % annual raise to your benefit through the power of deferral.</p>
                    </div>
                    <div>
                        <h2>{topicTwoTitle}</h2>
                        <div className={classes['video-container']} >
                            <iframe src={`${topicTwoUrl}?autoplay=0&amp;modestbranding=0&amp;controls=1&amp;showinfo=0&amp;rel=0&amp;hd=1&amp;wmode=transparent" frameBorder="0" allowFullScreen="" wmode="opaque" id="fitvid687039`}></iframe>
                        </div>
                        <p>Find out how you can receive an 8 % annual raise to your benefit through the power of deferral.</p>
                    </div>
                    <div>
                        <h2>{topicThreeTitle}</h2>
                        <div className={classes['video-container']} >
                            <iframe src={`${topicThreeUrl}?autoplay=0&amp;modestbranding=0&amp;controls=1&amp;showinfo=0&amp;rel=0&amp;hd=1&amp;wmode=transparent" frameBorder="0" allowFullScreen="" wmode="opaque" id="fitvid687039`}></iframe>
                        </div>
                        <p>Find out how you can receive an 8 % annual raise to your benefit through the power of deferral.</p>
                    </div>

                </div>
            </section>
        </>
    )
};

export default SectionTopicsCovered;