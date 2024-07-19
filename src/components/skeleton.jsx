import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={1}
    width={419}
    height={557}
    viewBox="0 0 419 557"
    backgroundColor="rgba(113, 113, 113, .87)"
    foregroundColor="rgba(113, 113, 113, .4)"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="419" height="557" />
  </ContentLoader>
)

export default Skeleton