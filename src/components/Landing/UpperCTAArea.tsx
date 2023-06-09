import styled from '@emotion/styled';
import Asterisk from '../../assets/svg/asterisk.svg';
import { Flex } from '../common/common';
import { CTAButton } from './CTAButton';

export const UpperCTAArea = ({ handleButtonClick }: { handleButtonClick: () => Promise<boolean> }) => {
    return (
        <Wrapper gap={14.79} align="center">
            <Asterisk className="asterisk" />
            <CTAButton onClick={handleButtonClick} />
        </Wrapper>
    );
};

const Wrapper = styled(Flex)`
    .asterisk {
        padding-left: 2.75vw;
        width: 2.87vw;
        height: 2.81vw;
    }

    height: 7.474vw;
`;
