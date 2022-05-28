import ContentLoader from "react-content-loader";

const IdeaSkeleton = (props) => (
  <ContentLoader
    speed={5}
    width={"100%"}
    height={"100%"}
    viewBox="0 0 260 300"
    backgroundColor="#14253d"
    foregroundColor="#1a2c44"
    style={{ cursor: "pointer" }}
    {...props}
  >
    <rect x="6" y="17" rx="10" ry="10" width="100%" height="100%" />
  </ContentLoader>
);

export default IdeaSkeleton;
