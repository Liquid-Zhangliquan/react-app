import React, { Component } from 'react';
import * as maptalks from 'maptalks';
import './map.css';

class MapView extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            center: [-0.113049, 51.498568],
            zoom: 14,
            fov: 0,
            pitch: 0,
            bearing: 0
        };
        this.map = null;
    }

    //在渲染前调用,在客户端也在服务端。
    componentWillMount() {

    }

    // 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。
    componentDidMount() {
        this.MapInit();
    }

    //在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。
    componentWillReceiveProps() {

    }
    //返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。 可以在你确认不需要更新组件时使用。
    shouldComponentUpdate() {

    }
    //在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用
    componentWillUpdate() {

    }
    //在组件完成更新后立即调用。在初始化时不会被调用。
    componentDidUpdate() {

    }
    //在组件从 DOM 中移除之前立刻被调用。
    componentWillUnmount() {

    }

    MapInit() {
        this.map = new maptalks.Map('map', {
            center: this.state.center,
            zoom: this.state.zoom,
            baseLayer: new maptalks.TileLayer('base', {
                urlTemplate: 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
                subdomains: ['a', 'b', 'c', 'd'],
                attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
            })
        })

    }

    render() {
        return (
            <div id="map" className="Map-container"></div>
        )
    }
}
export default MapView;
