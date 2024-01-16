import React from 'react';
import { Container } from 'reactstrap';
import Footer from '../../atoms/Footer';

export interface MinimalFooterProps {
    bg?: string;
    text?: string;
}

const MinimalFooter: React.FC<MinimalFooterProps> = props => (
    <Footer bg={props.bg}>
        <Container className="px-4" fluid>
            <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">{props.text}</div>
            </div>
        </Container>
    </Footer>
);

export default MinimalFooter;
