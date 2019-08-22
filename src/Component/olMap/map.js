import React, { Component } from 'react';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import { defaults as defaultControls, ScaleLine } from 'ol/control.js';
import TileLayer from 'ol/layer/Tile.js';
import TileWMS from 'ol/source/TileWMS.js';
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
        let layers = [
            new TileLayer({
                source: new TileWMS({
                    url: 'https://ahocevar.com/geoserver/wms',
                    params: {
                        'LAYERS': 'ne:NE1_HR_LC_SR_W_DR',
                        'TILED': true
                    }
                })
            })
        ];

        new Map({
            controls: defaultControls().extend([
                new ScaleLine({
                    units: 'degrees'
                })
            ]),
            layers: layers,
            target: 'map',
            view: new View({
                projection: 'EPSG:4326',
                center: [0, 0],
                zoom: 2
            })
        });

    }

    render() {
        return (
            <div id="map" className="Map-container"></div>
        )
    }
}
export default MapView;
