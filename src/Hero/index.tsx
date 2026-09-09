const Hero = () => {
    return(
        <>
        <div className="left">
            <h1>Hi, I'm Abishek Jayan, a Software Engineer passionate about Fullstack, AI and Multi Agentic Systems</h1>
            <p>I'm Abishek Jayan, recently graduated from Iowa State University with a Masters in Computer Science. Most recently, I worked at Chronos, an AI-powered multi-channel outreach SAAS platform, where I diagnosed and fixed a status-reconciliation bug that falsely marked connected Instagram accounts as disconnected, blocking AI-generated DM campaigns. This fix was delivered ahead of the platform's early-adopter rollout and commended by the CEO.   I also interned at Assembli, an AI-powered construction startup, where I built and deployed multi-agent RAG systems on Google Cloud Run to validate blueprints against building codes, improving accuracy and user satisfaction by 80%. I also placed 2nd in the Google North America Solution Challenge 2025 for building an AI-powered livestream search engine, and I contribute to ISU’s Bionics Lab, developing control software for a NASA-funded robotic hand project for lunar rover missions.
My Master’s Thesis focuses on offloading VR rendering to a backend server to support real-time visualization of massive filesizes,without the need for high-end VR hardware. The system uses Three.js, NodeJS, and WebRTC to stream frames, achieving a 70% latency reduction and enabling platform-agnostic visualization across WebXR clients.
Before this, I was a Software Engineer at QBurst, where I led development of a social media platform that launched with over 1,500 users globally and was featured on the company newsletter.
</p>
        <a href="https://www.linkedin.com/in/abishek-jayan/"> More about Me</a>
        </div>
        <div className="right">
            <img></img>
            <span>Hire Me</span>
            <span>Let's talk</span>
        </div>
        </>
    );
};

export default Hero;