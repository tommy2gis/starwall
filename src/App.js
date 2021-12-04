/*
 * @Author: shitao
 * @Date: 2021-10-19 21:19:18
 * @LastEditTime: 2021-12-04 21:06:22
 * @LastEditors: shitao
 * @Description:
 * @FilePath: \starwall\src\App.js
 * 无锡四维时空信息科技有限公司
 */
import React from "react";
import QueueAnim from "rc-queue-anim";
import PropTypes from "prop-types";
import TweenOne, { TweenOneGroup } from "rc-tween-one";
import "./App.css";

const textData = {
  content: (
    <>
      <p>少年负壮气，奋烈自有时。</p>
      <p>胸有惊雷，面如平湖。</p>
      <p>带刀能防守，球队做榜样；</p>
      <p>掉刀传球稳，突进亦能浪，</p>
      <p>若问他是谁，国际颜三胖。</p>
    </>
  ),
  title: "颜可达（掉刀小侍卫）",
};
let dataArray = [
  { image: "/starwall/images/1.jpg" },
  { image: "/starwall/images/1.jpg" },
  { image: "/starwall/images/1.jpg" },
  { image: "/starwall/images/1.jpg" },
  { image: "/starwall/images/1.jpg" },
  { image: "/starwall/images/1.jpg" },
  { image: "/starwall/images/1.jpg" },
  { image: "/starwall/images/1.jpg" },
  { image: "/starwall/images/1.jpg" },
  { image: "/starwall/images/1.jpg" },
  { image: "/starwall/images/1.jpg" },
  { image: "/starwall/images/1.jpg" },
  { image: "/starwall/images/1.jpg" },
  { image: "/starwall/images/1.jpg" },
  { image: "/starwall/images/1.jpg" },
  { image: "/starwall/images/1.jpg" },
  { image: "/starwall/images/1.jpg" },
  { image: "/starwall/images/1.jpg" },
  { image: "/starwall/images/1.jpg" },
  { image: "/starwall/images/1.jpg" },
  { image: "/starwall/images/1.jpg" },
  { image: "/starwall/images/1.jpg" },
  { image: "/starwall/images/1.jpg" },
  { image: "/starwall/images/1.jpg" },
  { image: "/starwall/images/1.jpg" },
  { image: "/starwall/images/1.jpg" },
  { image: "/starwall/images/1.jpg" },
  { image: "/starwall/images/1.jpg" },
  { image: "/starwall/images/1.jpg" },
];
dataArray = dataArray.map((item) => ({ ...item, ...textData }));
class PicDetails extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: "pic-details-demo",
  };

  constructor(props) {
    super(props);
    this.state = {
      picOpen: {},
    };
  }

  onImgClick = (e, i) => {
    const { picOpen } = this.state;
    Object.keys(picOpen).forEach((key) => {
      if (key !== i && picOpen[key]) {
        picOpen[key] = false;
      }
    });
    picOpen[i] = true;
    this.setState({
      picOpen,
    });
  };

  onClose = (e, i) => {
    const { picOpen } = this.state;
    picOpen[i] = false;
    this.setState({
      picOpen,
    });
  };

  onTweenEnd = (i) => {
    const { picOpen } = this.state;
    delete picOpen[i];
    this.setState({
      picOpen,
    });
  };

  getDelay = (e) => {
    const i = e.index + (dataArray.length % 10);
    return (i % 10) * 100 + Math.floor(i / 10) * 100 + 200;
  };

  getLiChildren = () => {
    const imgWidth = 110;
    const imgHeight = 176;
    const imgBoxWidth = 130;
    const imgBoxHeight = 196;
    return dataArray.map((item, i) => {
      const { image, title, content } = item;
      const isEnter = typeof this.state.picOpen[i] === "boolean";
      const isOpen = this.state.picOpen[i];

      const left = isEnter ? 0 : imgBoxWidth * (i % 10);
      const imgLeft = isEnter ? imgBoxWidth * (i % 10) : 0;
      const isRight = Math.floor((i % 10) / 5);
      const isTop = Math.floor(i / 10);
      let top = 0;
      top = isEnter ? top : imgBoxHeight * isTop;
      let imgTop = isTop ? imgBoxHeight : 0;
      imgTop = isEnter ? imgTop : 0;

      const liStyle = isEnter
        ? { width: "100%", height: 680, zIndex: 1 }
        : null;
      const liAnimation = isOpen
        ? { boxShadow: "0 2px 8px rgba(140, 140, 140, .35)" }
        : { boxShadow: "0 0px 0px rgba(140, 140, 140, 0)" };
      let aAnimation = isEnter
        ? {
            delay: 400,
            ease: "easeInOutCubic",
            width: imgWidth,
            height: imgHeight,
            onComplete: this.onTweenEnd.bind(this, i),
            left: imgBoxWidth * (i % 10),
            top: isTop ? imgBoxHeight : 0,
          }
        : null;
      aAnimation = isOpen
        ? {
            ease: "easeInOutCubic",
            left: isRight ? imgBoxWidth * 5 + 10 : 0,
            width: "50%",
            height: 680,
            top: 0,
          }
        : aAnimation;

      // 位置 js 控制；
      return (
        <TweenOne
          key={i}
          style={{
            left,
            top,
            ...liStyle,
          }}
          component="li"

          className={isOpen ? "open" : ""}
          animation={liAnimation}
        >
          <TweenOne
            component="a"
            onClick={(e) => this.onImgClick(e, i)}
            style={{
              left: imgLeft,
              top: imgTop,
            }}
            animation={aAnimation}
          >
            <img src={image}  width="100%" height="100%" />
          </TweenOne>
          <TweenOneGroup
            enter={[
              {
                opacity: 0,
                duration: 0,
                type: "from",
                delay: 400,
              },
              {
                ease: "easeOutCubic",
                type: "from",
                left: isRight ? "50%" : "0%",
              },
            ]}
            leave={{ ease: "easeInOutCubic", left: isRight ? "50%" : "0%" }}
            component=""
          >
            {isOpen && (
              <div
                onClick={e => this.onClose(e, i)}
                className={`${this.props.className}-text-wrapper`}
                key="text"
                style={{
                  left: isRight ? "0%" : "50%",
                  height: 680,
                }}
              >
                <h1>{title}</h1>

                <div>{content}</div>
              </div>
            )}
          </TweenOneGroup>
        </TweenOne>
      );
    });
  };

  render() {
    return (
      <div className={this.props.className}>
        <QueueAnim type="bottom" className={`${this.props.className}-title`}>
          <h1 key="h1">国际足球联盟</h1>
          <p key="p">球星荟萃</p>
        </QueueAnim>
        <QueueAnim
          delay={this.getDelay}
          component="ul"
          className={`${this.props.className}-image-wrapper`}
          interval={0}
          type="bottom"
        >
          {this.getLiChildren()}
        </QueueAnim>
      </div>
    );
  }
}
export default PicDetails;
