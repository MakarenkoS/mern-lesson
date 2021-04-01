import React from 'react'


export function Loader() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', paddingTop: '2 rem'}}>
      <div class="preloader-wrapper big active">
        <div class="spinner-layer spinner-blue-only">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div><div class="gap-patch">
            <div class="circle"></div>
          </div><div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
    </div>

  )
}