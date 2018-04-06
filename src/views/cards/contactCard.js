import React from 'react';
import PropTypes from 'prop-types';

const ContactCard = (contact) => {
      return (
        <div className="card">
            <div className="card-body">
            <div className="media">
                <img className="contact-img mr-3" src={process.env.PUBLIC_URL + '/images/' + contact.imgSrc} alt="" />
                <div className="media-body">
                    <h3 className="mt-0">{contact.name}</h3>

                    <dl>
                        {(contact.telephone) && <span>
                            <dt>Telephone</dt>
                            <dd><a className="link" href={'tel:'+contact.telephone}>{contact.telephone}</a></dd>
                            </span>
                        }
                        {(contact.email) && <span>
                            <dt>Email</dt>
                        <dd><a className="link" href={'mailto:'+contact.email}>{contact.email}</a></dd>
                        </span>
                        }
                    </dl>
                    
                </div>
            </div>
            </div>
        </div>
      );
}

ContactCard.PropTypes = {
    name: PropTypes.string.isRequired,
    telephone: PropTypes.string,
    email: PropTypes.string
}
  
export default ContactCard;