import Admonition from "@theme/Admonition";
import Translate from "@docusaurus/Translate";

export default function TailProtocal() {
  return (
    <Admonition type="tip" title={<Translate id="tailProtocol.title">协议</Translate>}>
      <Translate id="tailProtocol.code.start">本作品代码部分采用 </Translate>
      <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">
        <Translate id="tailProtocol.code.license">Apache 2.0协议</Translate>
      </a>{" "}
      <Translate id="tailProtocol.code.end">进行许可。遵循许可的前提下，你可以自由地对代码进行修改，再发布，可以将代码用作商业用途。但要求你：</Translate>
      <br />
      <ul>
        <li>
          <b><Translate id="tailProtocol.condition.attribution">署名</Translate></b>
          <Translate id="tailProtocol.condition.attribution.desc">：在原有代码和衍生代码中，保留原作者署名及代码来源信息。</Translate>
        </li>
        <li>
          <b><Translate id="tailProtocol.condition.license">保留许可证</Translate></b>
          <Translate id="tailProtocol.condition.license.desc">：在原有代码和衍生代码中，保留Apache 2.0协议文件。</Translate>
        </li>
      </ul>
      <Translate id="tailProtocol.docs.start">本作品文档部分采用 </Translate>
      <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">
        <Translate id="tailProtocol.docs.license">知识共享署名 4.0 国际许可协议</Translate>
      </a>{" "}
      <Translate id="tailProtocol.docs.end">
        进行许可。遵循许可的前提下，你可以自由地共享，包括在任何媒介上以任何形式复制、发行本作品，亦可以自由地演绎、修改、转换或以本作品为基础进行二次创作。但要求你：
      </Translate>
      <ul>
        <li>
          <b><Translate id="tailProtocol.condition.attribution">署名</Translate></b>
          <Translate id="tailProtocol.docs.condition.attribution.desc">：应在使用本文档的全部或部分内容时候，注明原作者及来源信息。</Translate>
        </li>
        <li>
          <b><Translate id="tailProtocol.docs.condition.noncommercial">非商业性使用</Translate></b>
          <Translate id="tailProtocol.docs.condition.noncommercial.desc">：不得用于商业出版或其他任何带有商业性质的行为。如需商业使用，请联系作者。</Translate>
        </li>
        <li>
          <b><Translate id="tailProtocol.docs.condition.sharealike">相同方式共享的条件</Translate></b>
          <Translate id="tailProtocol.docs.condition.sharealike.desc">：在本文档基础上演绎、修改的作品，应当继续以知识共享署名 4.0国际许可协议进行许可。</Translate>
        </li>
      </ul>
    </Admonition>
  );
}
