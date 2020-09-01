// 根据网页真实的解构 生成半自动
// 找到有内容的，然后加一个背景色
// <img /> 文字<文本节点> backgroud-image
function draw(){
document.querySelectorAll('*').forEach(element =>{
    const hasBg = getStyle(element,'backgroud-image');
    if(hasBg && hasBg !=='none'){
        element.style.backgroundColor = `#666`
    }
    const hasBgc = getStyle(element,'background-color')
    if(hasBgc && hasBgc !== 'rgba(0,0,0,0)'){
        element.style.backgroundColor = `#f6f8fa`
    }
    if(element.nodeName = 'IMG'){
        element.src = 'data:image/gif;base64,R0lGODlhAQABAPAAAPT09AAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAIf8LWE1QIERhdGFYTVA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiLz4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAA7'
    }
    // 如何知道节点里是否有文字
    if(element.childNodes && element.childNodes.length === 1&&element.childNodes[0].nodeType ===Node.TEXT_NODE){
        element.style.backgroundColor = `#666`
    }
})
}
function getStyle(ele,prop) {
    const styles = getComputedStyle(ele)
    return styles(prop);
}