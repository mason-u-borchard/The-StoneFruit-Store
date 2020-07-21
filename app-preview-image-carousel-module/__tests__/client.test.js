import React from 'react';
import App0 from '../client/src/components/App0.jsx';
import ImageCarousel from '../client/src/components/ImageCarousel.jsx';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';


describe('Components should exist', () => {

  it('Component Items carousel should exist', () => {
    const wrapper = shallow(<ImageCarousel />);
    expect(wrapper.exists()).toBe(true);

  });

  it('Component App should exist', () => {
    const wrapper = shallow(<App0/>);
    expect(wrapper.exists()).toBe(true);
    // expect(wrapper.find(App).length).toEqual(1);
  });


});


describe('App0', () => {

  test('renders image carousel', () => {
    const wrapper = shallow(<App0 />);
    expect(wrapper.find(ImageCarousel).length).toEqual(1);
  });



  test('collapsible list holds app info', () => {
    const pretendInfo = [{
      id: 200,
      app_description: 'It\'s Silly Brain Time',
      additional_text: 'FEATURES\n★  *pulls crank*!\n★  Ppl telling me "don\'t be 3x Ice cream"\n★  And I\'m here like "what did I do?!"\n★  not everyday that u get so hilarious brained that u invent the solutions machine',
      images:
  [ 'https://i.picsum.photos/id/737/180/300.jpg', 'https://i.picsum.photos/id/447/300/300.jpg', 'https://i.picsum.photos/id/446/180/300.jpg',
    'https://i.picsum.photos/id/757/180/300.jpg',
    'https://i.picsum.photos/id/767/300/300.jpg',
    'https://i.picsum.photos/id/334/180/300.jpg',
    'https://i.picsum.photos/id/791/180/300.jpg',
    'https://i.picsum.photos/id/730/180/300.jpg',
    'https://i.picsum.photos/id/731/180/300.jpg', 'https://i.picsum.photos/id/367/180/300.jpg',
    'https://i.picsum.photos/id/366/180/300.jpg',
    'https://i.picsum.photos/id/336/300/300.jpg',
    'https://i.picsum.photos/id/382/180/300.jpg',
    'https://i.picsum.photos/id/182/180/300.jpg'
  ],
      _id: 'Father John Mister T'
    }];


    // Renders collapsible info when app info exists
    const filled = shallow(<Collapsible trigger=<strong style={{
      display: 'grid',
      cursor: 'pointer',
      gridArea: 'readMore',
      gridTemplate: 'feature text1 text2 text3 readmore',
      color: 'green',
      justifyContent: 'center',
      alignText: 'center',
      fontfamily: 'Arial'
    }}>{pretendInfo.readMore}</strong>/>);
    expect(filled.find(Collapsible).length).toBe(1);
  });

  // displays image carousel photos
  test('should display first photo in list when <ItemsCarousel /> is rendered', () => {
    const ind = 5;
    const photoDisplay = photoCarousel().find('.carousel-img');

    expect(photoDisplay.find('img').prop('src')).toBe(images[0].photo_url);
    expect(photoCarousel().state('index')).toBe(0);
  });
});



describe('click left chevron', () => {
  it('should decrease activeItemIndex by 1, when current position is above 0', () => {
    const c = shallow(<ImageCarousel activeItemIndex={1}/>);

    c.find('leftChevron').simulate('click');

    expect(c.state('activeItemIndex')).toBe(0);
  });

  it('should make no change to activeItemIndex when current position is at 0', () => {
    const c = shallow(<ImageCarousel activeItemIndex={0} />);

    c.find('leftChevron').simulate('click');

    expect(c.state('activeItemIndex')).toBe(0);
  });
});


describe('click right chevron', () => {
  it('should increase activeItemIndex by 1, when current position is below length ', () => {
    const c = shallow(<ImageCarousel activeItemIndex={1}/>);

    c.find('rightChevron').simulate('click');

    expect(c.state('activeItemIndex')).toBe(2);
  });

});

