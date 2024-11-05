import React from 'react'
import ContentLoader from 'react-content-loader'

const PerProductSkeleton = () => {
  return (
    <ContentLoader 
    speed={2}
    width='710'
    height='330'
    viewBox="0 0 710 330"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="12" ry="12" width="38" height="38" /> 
    <rect x="75" y="0" rx="5" ry="5" width="253" height="38" /> 
    <rect x="564" y="0" rx="28" ry="28" width="143" height="43" /> 
    <rect x="0" y="75" rx="18" ry="18" width="323" height="248" /> 
    <rect x="372" y="75" rx="5" ry="5" width="198" height="23" /> 
    <rect x="372" y="126" rx="5" ry="5" width="198" height="23" /> 
    <rect x="372" y="177" rx="5" ry="5" width="198" height="69" /> 
    
  </ContentLoader>
  )
}

export default PerProductSkeleton