import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, CardText, CardTitle} from 'react-md/lib/Cards/index';
import {Slider} from 'react-md/lib/Sliders/index';

class Dashboard extends Component {

  render() {
    return (
      <div className="md-grid">
        <div className="md-cell md-cell--12">
          <Card className="md-block-centered">
            <CardTitle title="Using CardTitle" subtitle="With CardText" />
            <CardText>
              <p>
                The <code>CardText</code> component is really just useful for displaying any
                content with some additional padding.
              </p>
              <Slider id="example-card-slider" />
            </CardText>
          </Card>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);