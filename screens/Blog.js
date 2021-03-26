import * as React from 'react';
import { ScrollView } from 'react-native';
import { Card, Input, Icon } from 'react-native-elements';

function Blog({ navigation }) {
  return (
    <ScrollView style={{ marginTop: 100 }}>
      <Card styles={{ padding: 30 }}>
        <Card.Title>Elder Apothecary News and Stories</Card.Title>

        <Card.Title></Card.Title>
      </Card>

      <Card styles={{ padding: 30 }}>
        <Card.Title>It's all about health/wellness</Card.Title>
        <Card.Title>June 23, 2019</Card.Title>
        <Card.Title>
          There are so many reasons to switch to a more organic way of living.
          Do you know them? At one time in my 43 years, I did not. It took
          someone I love to get sick for the reality to slap me in the face! So,
          do not feel bad if you aren't aware. I will help you. I'm just gonna
          concentrate on one of the reasons in this blog and continue 2, 3, 4,
          etc as time moves forward. Reason 1: Your Health! Why do we continue
          to purchase products from companies we know use toxic chemicals? I'll
          tell you why. It's cheaper! The reason its cheaper is because of the
          toxic chemicals. These companies are literally creating poisons just
          to place a huge gap between real products and fake products when it
          comes to the market place. Why you ask? So you, the consumer, will
          think you are getting a deal. Yes you are getting a deal when it comes
          to your wallet, but when it comes to your health, the raw deal is the
          only one you are getting. My philosophy on this:You are either gonna
          pay for your health now with organic products to keep you from getting
          sick, or you are gonna pay later when you actually are sick. Have you
          seen the hospital bills cancer patients are receiving? I'd much rather
          pay a little extra now than thousands later. It is our duty as humans
          to take back our health and stop investing in these criminal
          companies. Corporate companies, who do not care about your health in
          the long run, are only interested in the bottom dollar.
        </Card.Title>
        <Input placeholder='Comment' />
        <Icon name='heart-o' type='font-awesome' size={24} />
      </Card>
      <Card styles={{ padding: 30 }}>
        <Card.Title>How I found my calling</Card.Title>
        <Card.Title>June 26, 2019</Card.Title>
        <Card.Title>
          It was a day unlike any other, the day I realized,if I was gonna live
          a good life I better start looking at my lifestyle. No more excuses,
          no more turning a blind eye. It was a couple weeks after my Mother had
          passed, and because of what she went through I was thouroghly done
          with Western Medicine. Up till that day, I was still hanging on to the
          hopes that it hadn't completely failed us. That particular day it hit
          me like a mac truck on a cold and rainy night, I was done, I may have
          just been minced meat scattered all over the road. My brain was
          everywhere! I started researching, and to my complete and utter
          disastisfaction I realized its not just western medicine that had
          failed us, it was all the companies I had relied on for years. I
          literally was going to have to go in to every room in my house and
          throw all the poisonous products away! I was about to just throw in
          the towel and say, "fuck it we have to die from something", but that
          day I had a special kind of strength. I realized I was going to have
          to revert to the ancients. The ones who came before us, the ones who
          lived way before plastic and synthetic medicine wrecked us and our
          planet. The ones who lived by the sun and slept by the moon, who grew
          their own food and made their own medicine. I was going to have to
          somehow get in touch with my genetic code and try to remember the
          knowledge that was already written in to my being. So it began, my
          quest to write out all commercial products and become self sustaining!
        </Card.Title>

        <Input placeholder='Comment' />
        <Icon name='heart-o' type='font-awesome' size={24} />
      </Card>
    </ScrollView>
  );
}

export default Blog;
