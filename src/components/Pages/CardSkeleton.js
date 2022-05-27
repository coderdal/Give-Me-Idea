import ContentLoader from "react-content-loader";

const SkeletonAnimation = (props) => (
  <ContentLoader
    speed={5}
    width={260}
    height={260}
    viewBox="0 0 260 300"
    backgroundColor="#14253d"
    foregroundColor="#1a2c44"
    style={{ cursor: "pointer" }}
    {...props}
  >
    <rect x="6" y="17" rx="10" ry="10" width="239" height="260" />
  </ContentLoader>
);

export default SkeletonAnimation;
