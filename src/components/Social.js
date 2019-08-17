import React from 'react';
import _ from 'lodash';

import {Link} from '../utils';

export default class Social extends React.Component {
    render() {
        return (
            <section>
                <h2>{_.get(this.props, 'pageContext.site.data.social.title')}</h2>
                <ul class="icons">
                    {_.map(_.get(this.props, 'pageContext.site.data.social.follow_section'), (link, link_idx) => (
                        <li key={link_idx}><Link to={_.get(link, 'link_url')} class={'icon style2 ' + _.get(link, 'icon')}><span class="label">{_.get(link, 'title')}</span></Link></li>
                    ))}
                </ul>
            </section>
        );
    }
}
