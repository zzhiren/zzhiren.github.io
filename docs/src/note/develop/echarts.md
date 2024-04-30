# [Echarts](https://echarts.apache.org/zh/index.html)

## Echarts

### dataZoom

```ts
const dataZoom = {
  // inside 表示数据区域缩放组件将被放置在坐标系内部，默认为该值。
  // 当鼠标在坐标系区域内滚动时，可以通过拖拽选择数据区域进行缩放。

  // slider 表示数据区域缩放组件将以滑动条的形式放置在坐标系下方。
  // 滑动条可以手动拖动或点击选择数据区域进行缩放。 
  
  // both  表示同时使用 'inside' 和 'slider' 
  // 两种方式的数据区域缩放组件，用户既可以在坐标系内部进行缩放，也可以通过滑动条进行缩放。
  type:'inside',                    //指定数据区域缩放组件的类型
  //当类型为  inside 可生效的配置
  id:'1',                           // 组件ID 
  disAbled:true,                    // 是否开启缩放功能
  xAxisIndex:[0,1],                 // 控制 X 轴，例如控制 第一个和第二个轴 xAxis 可缩放
  yAxisIndex:1,                     // 控制 Y 轴，例如控制 第二个 yAxis 可缩放
  radiusAxisIndex:1,                // 控制极坐标中的第二个 radius 轴 
  angleAxisIndex:1,                 // 控制极坐标中的第二个 angle 轴               
  filterMode:'filter',              // 数据过滤，来优化数据展示

  //百分比值，都通用
  start:40,                         // 数据展示窗口的初始数据
  end:80,                           // 数据展示窗口的结束数据
  minSpan:50,                       // 窗口的最小值
  maxSpan:50,                       // 窗口的最大值

  //绝对值吗，一般用在具体数值的轴
  startValue:20,                    // 数据展示窗口的初始数据
  endValue:80,                      // 数据展示窗口的结束数据
  minValueSpan:100,                 // 窗口的最小值
  maxValueSpan:100,                 // 窗口的最大值
  
  orient:'horizontal',              // 缩放是水平缩放还是竖直缩放
  zoomLock:true,                    // 是否固定当前窗口，将缩放修改为左右偏移窗口
  throttle:100,                     // 触发视图刷新的频率。
  rangeMode:[30,70],                // 缩放范围，当设置 start 等时为百分比 比例，若设置了startValue 等时为绝对值
  zoomOnMouseWhell:'ctrl',          // 如何触发缩放，如鼠标滚轮、 ctrl + 滚轮
  moveOnMouseMove:true,             // 缩放功能为平移时，如何移动鼠标来触发平移窗口,
  moveOnMouseWhell:true,            // 缩放功能为平移时，如何操作鼠标滚轮来触发偏移窗口
  preventDefaultMouseMove:true,     // 是否阻止 mousemove 事件的默认行为
  
  //当类型为  slider 可生效的配置
}

```