import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const SoundCloud = ({ id }) => (
  <iframe
    className="mb-2"
    width="100%"
    height="110"
    scrolling="no"
    frameBorder="no"
    src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${id}&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=false&amp;show_reposts=false&amp;visual=false&amp;show_artwork=false&amp;color=438b7e`}
  ></iframe>
);

const MediaCard = ({ children }) => (
  <div className="w-full md:w-1/2 rounded p-2 flex">
    <div className="shadow-md bg-white rounded p-6 flex-grow flex flex-col">
      {children}
    </div>
  </div>
);

const Title = ({ children }) => <h4 className="mb-2">{children}</h4>;

const RecordingInfo = ({ soloists, group, location, date }) => (
  <div className="text-xs flex flex-col flex-grow justify-between">
    <div className="mb-2">
      {soloists.map(s => (
        <p key={s}>{s}</p>
      ))}
    </div>
    <div className="flex text-xs">
      <div className="w-8/12">
        <p>{group}</p>
        <p className="inline">{location}</p>
      </div>
      <div className="flex flex-row-reverse w-4/12 items-end">
        <p>{date}</p>
      </div>
    </div>
  </div>
);

const Media = () => (
  <Layout title="Media">
    <SEO title="Media" />
    <div
      className="flex w-full max-w-screen-lg justify-around flex-wrap m-4
    text-base"
    >
      <MediaCard>
        <Title>
          <q>He was despised</q> from <i>Messiah</i> - G.F. Handel
        </Title>
        <SoundCloud id={788660995} />
        <RecordingInfo
          soloists={['Tim Keeler, countertenor']}
          group="University of Maryland Symphony Orchestra"
          location="College Park, MD"
          date="December 8, 2019"
        />
      </MediaCard>
      <MediaCard>
        <Title>
          <q>Agnus Dei</q> from <i>Mass in B Minor</i> - J.S. Bach
        </Title>
        <SoundCloud id={329818228} />
        <RecordingInfo
          soloists={['Tim Keeler, countertenor']}
          group="Audivi"
          location="Birmingham, MI"
          date="June 3, 2017"
        />
      </MediaCard>
      <MediaCard>
        <Title>
          <i>Canticle II: Abraham and Isaac</i> - Benjamin Britten
        </Title>
        <SoundCloud id={317347232} />
        <RecordingInfo
          soloists={['Tim Keeler, countertenor', 'Nate Hodgson, tenor']}
          group="Bach Vespers"
          location="Holy Trinity Lutheran Church, NYC"
          date="April 2, 2017"
        />
      </MediaCard>
      <MediaCard>
        <Title>
          <i>Christi Glieder, ach bedenket</i> - J.S. Bach, BWV 132
        </Title>
        <SoundCloud id={297630893} />
        <RecordingInfo
          soloists={['Tim Keeler, countertenor']}
          group="Bach Vespers"
          location="Holy Trinity Lutheran Church, NYC"
          date="December 4, 2016"
        />
      </MediaCard>
      <MediaCard>
        <Title>
          <i>Erstanden ist der heilige Christ</i> - Nicolaus Bruhns
        </Title>
        <SoundCloud id={258628360} />
        <RecordingInfo
          soloists={[
            'Tim Keeler, countertenor',
            'Elizabeth Baber-Weaver, soprano',
          ]}
          group="Bach Vespers"
          location="Holy Trinity Lutheran Church, NYC"
          date="April 10, 2016"
        />
      </MediaCard>
    </div>
  </Layout>
);

export default Media;
