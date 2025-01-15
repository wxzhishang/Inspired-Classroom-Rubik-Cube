import React from 'react'
import { Document, Page } from 'react-pdf'
// import pdfFile from '../../assets/resource/15082781523.pdf'
// 本地PDF文件路径，实际应用中需要修改为真实url路径
export default () => {
  return (
    <Document>
      <Page pageNumber={1} />
    </Document>
  )
}
