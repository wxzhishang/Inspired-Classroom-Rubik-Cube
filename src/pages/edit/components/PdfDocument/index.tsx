// /*
//  * @文件描述: 创建PDF文档(默认模板、默认风格)
//  * @作者: luxiaolong
//  * @Date: 2025-01-15 11:39:33
//  * @LastEditors: luxiaolong
//  * @LastEditTime: 2025-01-15 15:56:13
//  */
// // import { Document, Page, Text, View } from '@react-pdf/renderer'
// // import React from 'react'
// // import styled from 'styled-components'

// // // 使用styled-components创建自定义表格组件
// // const TableView = styled(View)`
// //   display: table;
// //   width: 100%;
// //   border-collapse: collapse;
// // `

// // const TableRow = styled(View)`
// //   display: table-row;
// // `

// // const TableHeaderCell = styled(View)`
// //   display: table-cell;
// //   border: 1px solid black;
// //   padding: 5px;
// //   vertical-align: middle;
// // `

// // const TableCell = styled(View)`
// //   display: table-cell;
// //   border: 1px solid black;
// //   padding: 5px;
// //   vertical-align: middle;
// // `

// // // 教案数据
// // const lessonPlanData = {
// //   topic: '',
// //   class: '',
// //   classTime: '',
// //   teacher: '',
// //   teachingContent: '',
// //   teachingDifficulties: '',
// //   teachingKeyPoints: '',
// //   teachingProcess: '',
// //   teachingObjectives: '',
// // }

// // // 教案表格组件
// // const LessonPlanTable = () => (
// //   <TableView>
// //     <TableRow>
// //       <TableHeaderCell style={{ width: '30%' }}>
// //         <Text>课题</Text>
// //       </TableHeaderCell>
// //       <TableCell style={{ width: '40%' }}>
// //         <Text>{lessonPlanData.topic}</Text>
// //       </TableCell>
// //       <TableHeaderCell style={{ width: '15%' }}>
// //         <Text>班级</Text>
// //       </TableHeaderCell>
// //       <TableCell style={{ width: '15%' }}>
// //         <Text>{lessonPlanData.class}</Text>
// //       </TableCell>
// //     </TableRow>
// //     <TableRow>
// //       <TableHeaderCell style={{ width: '30%' }}>
// //         <Text>上课时间</Text>
// //       </TableHeaderCell>
// //       <TableCell style={{ width: '70%' }}>
// //         <Text>{lessonPlanData.classTime}</Text>
// //       </TableCell>
// //     </TableRow>
// //     <TableRow>
// //       <TableHeaderCell style={{ width: '30%' }}>
// //         <Text>任课老师</Text>
// //       </TableHeaderCell>
// //       <TableCell style={{ width: '70%' }}>
// //         <Text>{lessonPlanData.teacher}</Text>
// //       </TableCell>
// //     </TableRow>
// //     <TableRow>
// //       <TableHeaderCell style={{ width: '30%' }}>
// //         <Text>教学内容</Text>
// //       </TableHeaderCell>
// //       <TableCell style={{ width: '70%' }}>
// //         <Text>{lessonPlanData.teachingContent}</Text>
// //       </TableCell>
// //     </TableRow>
// //     <TableRow>
// //       <TableHeaderCell style={{ width: '30%' }}>
// //         <Text>教学难点</Text>
// //       </TableHeaderCell>
// //       <TableCell style={{ width: '70%' }}>
// //         <Text>{lessonPlanData.teachingDifficulties}</Text>
// //       </TableCell>
// //     </TableRow>
// //     <TableRow>
// //       <TableHeaderCell style={{ width: '30%' }}>
// //         <Text>教学重点</Text>
// //       </TableHeaderCell>
// //       <TableCell style={{ width: '70%' }}>
// //         <Text>{lessonPlanData.teachingKeyPoints}</Text>
// //       </TableCell>
// //     </TableRow>
// //     <TableRow>
// //       <TableHeaderCell style={{ width: '30%' }}>
// //         <Text>教学过程</Text>
// //       </TableHeaderCell>
// //       <TableCell style={{ width: '70%' }}>
// //         <Text>{lessonPlanData.teachingProcess}</Text>
// //       </TableCell>
// //     </TableRow>
// //     <TableRow>
// //       <TableHeaderCell style={{ width: '30%' }}>
// //         <Text>教学目标</Text>
// //       </TableHeaderCell>
// //       <TableCell style={{ width: '70%' }}>
// //         <Text>{lessonPlanData.teachingObjectives}</Text>
// //       </TableCell>
// //     </TableRow>
// //   </TableView>
// // )

// // // 主 PDF 文档组件
// // const PdfDocument = () => (
// //   <Document>
// //     <Page size="A4">
// //       <LessonPlanTable />
// //     </Page>
// //   </Document>
// // )

// // export default PdfDocument

// import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer'

// // 定义表格数据
// const tableData = [
//   ['课题', '课程名称示例'],
//   ['班级', 'XX班'],
//   ['上课时间', '2023-10-05 14:00'],
//   ['任课老师', '张老师'],
//   ['教学内容', '今天我们将学习...'],
//   ['教学难点', '难点在于...'],
//   ['教学重点', '重点是...'],
//   // 可以根据需要添加更多行
// ]

// // 样式定义
// const styles = StyleSheet.create({
//   table: {
//     flexDirection: 'column',
//     padding: 10,
//   },
//   row: {
//     flexDirection: 'row',
//     marginBottom: 5,
//   },
//   cell: {
//     flex: 1,
//     padding: 5,
//     borderBottom: '1px solid #000', // 你可以根据需要调整边框样式
//   },
//   cellKey: {
//     fontWeight: 'bold', // 你可以根据需要调整键的样式
//   },
//   cellValue: {
//     // 你可以根据需要调整值的样式
//   },
// })

// const PdfDocument = () => (
//   <Document>
//     <Page size="A4" style={{ padding: 20 }}>
//       <View style={styles.table}>
//         {tableData.map(([key, value], index) => (
//           <View key={index} style={styles.row}>
//             <View style={[styles.cell, styles.cellKey]}>
//               <Text>{key}</Text>
//             </View>
//             <View style={[styles.cell, styles.cellValue]}>
//               <Text>{value}</Text>
//             </View>
//           </View>
//         ))}
//       </View>
//     </Page>
//   </Document>
// )

// export default PdfDocument
