/*
 * @Author: shitao
 * @Date: 2021-10-19 21:19:18
 * @LastEditTime: 2021-12-09 22:21:08
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

let dataArray = [
  {
    image: "/starwall/images/1.jpg",
    title: "薛占林（人间大炮）",
    content: (
      <>
        <p>心事浩渺连广宇,</p>
        <p>于无声处听惊雷。</p>
        <p>劳苦功高，兢兢业业，</p>
        <p>不计付出，国际人称阿豹。</p>
        <p>惊鸿绝艳，潇潇洒洒，</p>
        <p>连停带过，转身人间大炮。</p>
      </>
    ),
  },
  {
    image: "/starwall/images/2.jpg",
    title: "黄海（宝刀未老）",
    content: (
      <>
        <p>老骥伏枥，志在千里。</p>
        <p>他是国际队最年长的球星，</p>
        <p>也是国际队里的人生导师；</p>
        <p>球场上他是边路神驹；</p>
        <p>比赛时他甘愿充当绿叶；</p>
        <p>他的精神是国际队的至宝；</p>
        <p>他的人品是国际队的骄傲。</p>
        <p>他是国际队最受尊重的老大哥。</p>
      </>
    ),
  },
  {
    image: "/starwall/images/3.jpg",
    title: "王益明（玉面书生）",
    content: (
      <>
        <p>当时年少春衫薄，</p>
        <p> 骑马踢球倚斜桥。</p>
        <p> 绿茵场上纵肆意，</p>
        <p>无敌手，</p>
        <p>奈何伤了腰。</p>
        <p>球技颜值成一统，</p>
        <p>国际队里属他高。</p>
        <p>长发飘，鳌头领风骚。</p>
      </>
    ),
  },
  {
    image: "/starwall/images/4.jpg",
    title: "华伟（半吨土墙）",
    content: (
      <>
        <p> 但使龙城飞将在，</p>
        <p> 不教胡马度阴山。</p>
        <p>后防线上起高墙，</p>
        <p>绿茵场上铸铁汉。</p>
        <p>试问谁敢横刀立马，</p>
        <p>为我华大将军。</p>
      </>
    ),
  },
  {
    image: "/starwall/images/5.jpg",
    title: "谢华（国际沙悟净）",
    content: (
      <>
        <p> 桃李春风一杯酒，</p>
        <p>江湖夜雨十年灯。</p>
        <p>全场飞奔不知疲倦，</p>
        <p>脏活累活一人全干。</p>
        <p>脚下灵动不紧不慢，</p>
        <p>进攻防守一条好汉。</p>
        <p>足球场上的楷模，</p>
        <p>国际队里的榜样。</p>
      </>
    ),
  },
  {
    image: "/starwall/images/7.jpg",
    title: "许寅平（滴滴指挥官）",
    content: (
      <>
     <p> 足球救世主，</p>
     <p>队伍主心骨，</p>
     <p> 眼光通六路，</p>
     <p> 远射如劲弩。</p>
     <p> 盘带无死角，</p>
     <p>防守猛如虎，</p>
     <p>战术NO.1，</p>
     <p> 布局用心苦。</p>
      </>
    ),
  },
  {
    image: "/starwall/images/6.jpg",
    title: "颜可达（掉刀小侍卫）",
    content: (
      <>
      <p>少年负壮气，奋烈自有时。</p>
      <p>胸有惊雷，面如平湖。</p>
      <p>带刀能防守，球队做榜样；</p>
      <p>掉刀传球稳，突进亦能浪，</p>
      <p>若问他是谁，国际颜三胖。</p>
      </>
    ),
  },
  {
    image: "/starwall/images/8.jpg",
    title: "史涛（迷之永动机）",
    content: (
      <>
      <p>爱笑谈，</p>
      <p>真心喜欢无作假，</p>
      <p>场场必到；</p>
      <p>不惜力，</p>
      <p>拼命奔跑创良机，</p>
      <p>次次当先。</p>
      <p>何所期，贵珍惜，</p>
      <p>他是迷之永动机；</p>
      <p>除却君身三尺雪，</p>
      <p> 天下谁人配白衣。</p>
      </>
    ),
  },
  {
    image: "/starwall/images/9.jpg",
    title: "王国庆（重磅叶孤城）",
    content: (
      <>
        <p>月圆之夜，紫禁之巅，</p>
        <p>一剑西来，天外飞仙。</p>
        <p>把握机会身手敏，</p>
        <p>破门如麻赛一品。</p>
        <p>可叹如今时常里，</p>
        <p>心宽体胖跳不起，</p>
        <p>衣带已渐紧。</p>
        <p>想当年，</p>
        <p>一剑光寒定九州，</p>
        <p>大呼过瘾。</p>

      </>
    ),
  },
  {
    image: "/starwall/images/10.jpg",
    title: "孙群荣（十米走单骑）",
    content: (
      <>
       <p>文能提笔安天下，</p>
       <p>武能上马定乾坤。</p>
       <p> 输攻墨守，</p>
       <p>自有千秋。</p>
       <p>十米突袭，</p>
       <p>脚法出奇，</p>
       <p> 马中赤兔，</p>
       <p>单骑无敌。</p>

      </>
    ),
  },
  {
    image: "/starwall/images/11.jpg",
    title: "赵明（无情哈拉少）",
    content: (
      <>
        <p>无情剑客放声笑，绿荫场上他最妙；</p>
        <p>飞檐走壁弹指间，连消带打哈拉少。</p>
        <p>他是足球的天才，他有野狗般的身体。</p>
        <p>他技术全面，可以胜任任何位置；</p>
        <p>他作风硬朗，敢打敢拼。</p>
        <p>堪称国际队里擎天白玉柱，</p>
        <p>架海紫金梁。</p>
      </>
    ),
  },
  {
    image: "/starwall/images/12.jpg",
    title: "张昭（有仙蹴鞠）",
    content: (
      <>
       <p>艺高人胆大，胆大艺更高。</p>
       <p> 花样绝活，独领风骚。</p>
       <p>只是，有伤在腰。</p>
       <p> 自在飞花轻似梦，</p>
       <p>无边丝雨细如愁。</p>
       <p>蹴鞠屡过飞鸟上，</p>
       <p> 秋千竞出垂杨里。</p>

      </>
    ),
  },
  {
    image: "/starwall/images/13.jpg",
    title: "仇耀庆（二手因扎吉）",
    content: (
      <>
        <p>国际队里因扎吉，</p>
        <p>锋线位置出神奇；</p>
        <p>潇洒身影闲庭步，</p>
        <p>一球突来无人敌。</p>
        <p>神龙见首不见尾，</p>
        <p>盼得对手起心疑；</p>
        <p>有朝一日龙归海，</p>
        <p>足球场上万人迷。</p>

      </>
    ),
  },
  {
    image: "/starwall/images/14.jpg",
    title: "高磊（凌空公子）",
    content: (
      <>
       <p>陌上人如玉，公子世无双。</p>
       <p>头锤破龙门，飞足踏九州。</p>
       <p>翩若游龙，宛若惊鸿。</p>
       <p>各项技能无短板，英雄胆；</p>
       <p>门前亦能凌空斩，威风显。</p>

      </>
    ),
  },
  {
    image: "/starwall/images/15.jpg",
    title: "袁继光（无须关二爷）",
    content: (
      <>
        <p>红光满面退长髯，</p>
        <p>足球场上不惧难；</p>
        <p>硬桥硬马浑不怕，</p>
        <p>围追堵截若等闲；</p>
        <p>手执春秋明大义，</p>
        <p>心胸磊落道德玄；</p>
        <p>青龙偃月所到处，</p>
        <p> 人仰马翻无阻拦。</p>
      </>
    ),
  },
  {
    image: "/starwall/images/16.jpg",
    title: "王萱（长安浪子）",
    content: (
      <>
       <p>青海长云暗雪山，</p>
       <p>孤城遥望玉门关；</p>
       <p>初出茅庐根基浅，</p>
       <p>不惧岁月扬长帆；</p>
       <p>破釜沉舟奔波苦，</p>
       <p>汗洒绿荫弹指间，</p>
       <p>一日练得屠龙技，</p>
       <p>锦衣华服入长安。</p>

      </>
    ),
  },
  { image: "/starwall/images/17.jpg",
  title: "王安民（逢堵必过）",
  content: (
    <>
    <p>银鞍照白马，</p>
    <p>飒沓如流星。</p>
    <p>脚踩麒麟步，</p>
    <p> 身法似游鱼。</p>
    <p>一堵二堵三四堵，</p>
    <p> 五过六过七八过。</p>
    <p>乾坤挪移方寸间，</p>
    <p>固壁防线弹指破。</p>


    </>
  ) },
  { image: "/starwall/images/18.jpg",
  title: "徐宁（只接小活）",
  content: (
    <>
     <p>带球赛过小李广，</p>
     <p>传球力压青面兽。</p>
     <p>站定前场不动摇，</p>
     <p>展示小活全靠走。</p>
     <p>身体微恙无奈何，</p>
     <p>国际队中金枪手。</p>

    </>
  ) },
  { image: "/starwall/images/19.jpg",
  title: "吴健（无准星迫击炮）",
  content: (
    <>
     <p>大鹏一日同风起，</p>
     <p>扶摇直上九万里；</p>
     <p>五关六将千重浪，</p>
     <p>拔腿怒射心欢喜。</p>
     <p>禁区架起迫击炮，</p>
     <p>怎料准星没调校；</p>
     <p>一顿操作猛如虎，</p>
     <p>一看战绩零比五。</p>


    </>
  ) },
  { image: "/starwall/images/20.jpg",
  title: "陶海军（42度的探戈）",
  content: (
    <>
    <p>探戈就是趟着走，</p>
    <p>脚背传球场场有；</p>
    <p>四十二度饮烧白，</p>
    <p>一口下去吼三吼；</p>
    <p>身姿优雅球后拉，</p>
    <p>中场核心稳如狗。</p>


    </>
  ) },
  { image: "/starwall/images/21.jpg",
  title: "蒋骏伟（戏球小能手）",
  content: (
    <>
    <p>玩球不到球场来，</p>
    <p>游戏人间春常在；</p>
    <p>年少多金又潇洒，</p>
    <p>迷得姑娘人人爱。</p>


    </>
  ) },
  { image: "/starwall/images/22.jpg",
  title: "卓加峰（飞翔的大师）",
  content: (
    <>
     <p>男儿何不带吴钩，</p>
     <p>收取关山五十州；</p>
     <p>大师球场尽欢处，</p>
     <p>当年帝王万户侯；</p>
     <p>飞来飞去身缥缈，</p>
     <p>犹如登高万重楼；</p>
     <p>无论他日何处去，</p>
     <p>盼君转身多回眸。</p>


    </>
  ) },
  { image: "/starwall/images/23.jpg",
  title: "陆高安（断闸小摩托）",
  content: (
    <>
    <p>凌波微步不必说，</p>
    <p>梯云纵上长坂坡；</p>
    <p>前场突破了无痕，</p>
    <p>后场协防铸城郭；</p>
    <p>春风得意马蹄疾，</p>
    <p>香象度过恒沙河；</p>
    <p>国际队里属他快，</p>
    <p>断了闸的小摩托。</p>


    </>
  ) },
  { image: "/starwall/images/24.jpg",
  title: "王治俊（神秘来客）",
  content: (
    <>
     <p>绿茵场上落雨湿，</p>
     <p>灵活身姿迷人痴；</p>
     <p>不羁奔跑千钧处，</p>
     <p>一朝成名天下知。</p>


    </>
  ) },
  { image: "/starwall/images/25.jpg",
  title: "高兴（神出鬼没）",
  content: (
    <>
     <p>后防大将，神出鬼没；</p>
     <p>虽不常来，球技不弱；</p>
     <p>中场拿球，连停带过；</p>
     <p>一脚射门，应声而破。</p>

    </>
  ) },
  { image: "/starwall/images/26.jpg",
  title: "许希望（精灵不热身）",
  content: (
    <>
      <p>少年侠气，交结五都雄。</p>
      <p> 肝胆洞，毛发耸。</p>
      <p>红衣精灵力无穷。</p>
      <p>怎料不热身，</p>
      <p>腿脚不从容。</p>
      <p>待修养，气氛浓。</p>
      <p>足球场上活虎生龙。</p>


    </>
  ) },
  { image: "/starwall/images/27.jpg",
  title: "胡新元（消失的新人）",
  content: (
    <>
    <p> 积极出席忙热身，</p>
    <p> 一脚跨进球场门；</p>
    <p> 如今踢球新之城，</p>
    <p> 场场缺席不见人。</p>

    </>
  ) },
  { image: "/starwall/images/28.jpg",
  title: "陈敏（宕机终结者）",
  content: (
    <>
   <p> 葡萄美酒夜光杯，</p>
   <p> 欲饮琵琶马上催；</p>
   <p> 醉卧沙场君莫笑，</p>
   <p>古来征战几人回。</p>
   <p>绿茵场上终结者，</p>
   <p>奈何宕机徒伤悲；</p>
   <p>诗酒田园终卸甲，</p>
   <p>转身抱得美人归。</p>


    </>
  ) },
  { image: "/starwall/images/29.jpg",
  title: "杨仪（坦克手贝塔）",
  content: (
    <>
    <p>闲云潭影日悠悠，</p>
    <p>物换星移几度秋。</p>
    <p>国际队里常青树，</p>
    <p>赫赫威名场上留。</p>
    <p>指挥若定好胆魄，</p>
    <p>后防稳固不用愁。</p>
    <p>公平正义守原则，</p>
    <p>不服来战坦克手。</p>


    </>
  ) },
];
dataArray = dataArray.map((item) => ({ ...item }));
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
            <img src={image} width="100%" height="100%" />
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
                onClick={(e) => this.onClose(e, i)}
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
