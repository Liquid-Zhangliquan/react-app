import React, { Component } from 'react';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import { defaults as defaultControls, ScaleLine } from 'ol/control.js';
import {
    Tile as TileLayer
} from 'ol/layer';
import {
    XYZ
} from 'ol/source.js';
import 'ol/ol.css'
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

    // 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。
    componentDidMount() {
        this.MapInit();
    }

    MapInit() {
        let layers = [
            new TileLayer({
                source: new XYZ({
                    url: "http://mt{0-3}.google.cn/vt/lyrs=m@235000000&hl=zh-CN&gl=CN&src=app&x={x}&y={y}&z={z}&s=Galileo",
                    wrapX: true
                }),
            })
        ];

        this.map = new Map({
            controls: defaultControls().extend([
                new ScaleLine({
                    units: 'degrees'
                })
            ]),
            layers: layers,
            target: 'map',
            view: new View({
                projection: 'EPSG:4326',
                center: [107.41763090269687, 35.76253913470311],
                zoom: 5
            })
        }).on('click', evt => {
            console.log(evt)
        })

    }

    render() {
        return (
            <div id="map" className="Map-container"></div>
        )
    }
}
export default MapView;
