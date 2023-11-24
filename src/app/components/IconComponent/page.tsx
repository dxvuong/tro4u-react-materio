"use client"
import React from 'react'
import WrappComponent from '../Wrapp/page'
import "./page.scss"
import * as Icons from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


import AnalyticsIcon from '@mui/icons-material/Analytics';
import AnchorIcon from '@mui/icons-material/Anchor';
import AndroidIcon from '@mui/icons-material/Android';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import ApartmentIcon from '@mui/icons-material/Apartment';
import APIIcon from '@mui/icons-material/API';
import AppBlockingIcon from '@mui/icons-material/AppBlocking';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import AppsIcon from '@mui/icons-material/Apps';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import ArchiveIcon from '@mui/icons-material/Archive';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArticleIcon from '@mui/icons-material/Article';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AssistantIcon from '@mui/icons-material/Assistant';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import AtmIcon from '@mui/icons-material/Atm';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AttachmentIcon from '@mui/icons-material/Attachment';

import BackspaceIcon from '@mui/icons-material/Backspace';
import BackupIcon from '@mui/icons-material/Backup';
import BallotIcon from '@mui/icons-material/Ballot';
import BarChartIcon from '@mui/icons-material/BarChart';
import BatchPredictionIcon from '@mui/icons-material/BatchPrediction';
import BatteryAlertIcon from '@mui/icons-material/BatteryAlert';
import BatteryCharging20Icon from '@mui/icons-material/BatteryCharging20';
import BatteryCharging30Icon from '@mui/icons-material/BatteryCharging30';
import BatteryCharging50Icon from '@mui/icons-material/BatteryCharging50';
import BatteryCharging60Icon from '@mui/icons-material/BatteryCharging60';
import BatteryCharging80Icon from '@mui/icons-material/BatteryCharging80';
import BatteryCharging90Icon from '@mui/icons-material/BatteryCharging90';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import BatteryStdIcon from '@mui/icons-material/BatteryStd';
import BatteryUnknownIcon from '@mui/icons-material/BatteryUnknown';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import BentoIcon from '@mui/icons-material/Bento';
import BikeScooterIcon from '@mui/icons-material/BikeScooter';
import BiotechIcon from '@mui/icons-material/Biotech';
import BlockIcon from '@mui/icons-material/Block';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import BluetoothAudioIcon from '@mui/icons-material/BluetoothAudio';
import BluetoothConnectedIcon from '@mui/icons-material/BluetoothConnected';
import BluetoothDisabledIcon from '@mui/icons-material/BluetoothDisabled';
import BluetoothSearchingIcon from '@mui/icons-material/BluetoothSearching';
import BlurCircularIcon from '@mui/icons-material/BlurCircular';
import BlurLinearIcon from '@mui/icons-material/BlurLinear';
import BlurOffIcon from '@mui/icons-material/BlurOff';
import BlurOnIcon from '@mui/icons-material/BlurOn';

import CameraIcon from '@mui/icons-material/Camera';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import CameraFrontIcon from '@mui/icons-material/CameraFront';
import CameraRearIcon from '@mui/icons-material/CameraRear';
import CameraRollIcon from '@mui/icons-material/CameraRoll';
import CampaignIcon from '@mui/icons-material/Campaign';
import CancelIcon from '@mui/icons-material/Cancel';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import CancelScheduleSendIcon from '@mui/icons-material/CancelScheduleSend';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import CarpenterIcon from '@mui/icons-material/Carpenter';
import CasinoIcon from '@mui/icons-material/Casino';
import CastIcon from '@mui/icons-material/Cast';
import CastConnectedIcon from '@mui/icons-material/CastConnected';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import CategoryIcon from '@mui/icons-material/Category';
import CelebrationIcon from '@mui/icons-material/Celebration';
import CellWifiIcon from '@mui/icons-material/CellWifi';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import ChargingStationIcon from '@mui/icons-material/ChargingStation';
import ChatIcon from '@mui/icons-material/Chat';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CheckIcon from '@mui/icons-material/Check';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode';
import CircleIcon from '@mui/icons-material/Circle';
import ClearIcon from '@mui/icons-material/Clear';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import CloseIcon from '@mui/icons-material/Close';
import ClosedCaptionIcon from '@mui/icons-material/ClosedCaption';
import CloudIcon from '@mui/icons-material/Cloud';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import CloudOffIcon from '@mui/icons-material/CloudOff';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CodeIcon from '@mui/icons-material/Code';
import CollectionsIcon from '@mui/icons-material/Collections';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ColorizeIcon from '@mui/icons-material/Colorize';
import CommentIcon from '@mui/icons-material/Comment';
import CommentBankIcon from '@mui/icons-material/CommentBank';
import CommuteIcon from '@mui/icons-material/Commute';
import CompareIcon from '@mui/icons-material/Compare';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import CompassCalibrationIcon from '@mui/icons-material/CompassCalibration';
import ComputerIcon from '@mui/icons-material/Computer';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import ConstructionIcon from '@mui/icons-material/Construction';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import ContactlessIcon from '@mui/icons-material/Contactless';
import ContactsIcon from '@mui/icons-material/Contacts';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import ControlCameraIcon from '@mui/icons-material/ControlCamera';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import Button from '@mui/material/Button';
import Link from 'next/link';
const iconArray = [
  { Icon: APIIcon, name: 'API' },
  { Icon: AppBlockingIcon, name: 'AppBlocking' },
  { Icon: AppRegistrationIcon, name: 'AppRegistration' },
  { Icon: AppSettingsAltIcon, name: 'AppSettingsAlt' },
  { Icon: AppsIcon, name: 'Apps' },
  { Icon: ArchitectureIcon, name: 'Architecture' },
  { Icon: ArchiveIcon, name: 'Archive' },
  { Icon: ArrowBackIcon, name: 'ArrowBack' },
  { Icon: ArrowDownwardIcon, name: 'ArrowDownward' },
  { Icon: ArrowDropDownIcon, name: 'ArrowDropDown' },
  { Icon: ArrowDropDownCircleIcon, name: 'ArrowDropDownCircle' },
  { Icon: ArrowDropUpIcon, name: 'ArrowDropUp' },
  { Icon: ArrowForwardIcon, name: 'ArrowForward' },
  { Icon: ArrowForwardIosIcon, name: 'ArrowForwardIos' },
  { Icon: ArrowLeftIcon, name: 'ArrowLeft' },
  { Icon: ArrowRightIcon, name: 'ArrowRight' },
  { Icon: ArrowRightAltIcon, name: 'ArrowRightAlt' },
  { Icon: ArrowUpwardIcon, name: 'ArrowUpward' },
  { Icon: ArticleIcon, name: 'Article' },
  { Icon: ArtTrackIcon, name: 'ArtTrack' },
  { Icon: AspectRatioIcon, name: 'AspectRatio' },
  { Icon: AssessmentIcon, name: 'Assessment' },
  { Icon: AssignmentIcon, name: 'Assignment' },
  { Icon: AssignmentIndIcon, name: 'AssignmentInd' },
  { Icon: AssignmentLateIcon, name: 'AssignmentLate' },
  { Icon: AssignmentReturnIcon, name: 'AssignmentReturn' },
  { Icon: AssignmentReturnedIcon, name: 'AssignmentReturned' },
  { Icon: AssignmentTurnedInIcon, name: 'AssignmentTurnedIn' },
  { Icon: AssistantIcon, name: 'Assistant' },
  { Icon: AssistantPhotoIcon, name: 'AssistantPhoto' },
  { Icon: AtmIcon, name: 'Atm' },
  { Icon: AttachEmailIcon, name: 'AttachEmail' },
  { Icon: AttachFileIcon, name: 'AttachFile' },
  { Icon: AttachMoneyIcon, name: 'AttachMoney' },
  { Icon: AttachmentIcon, name: 'Attachment' },
  { Icon: BackspaceIcon, name: 'Backspace' },
  { Icon: BackupIcon, name: 'Backup' },
  { Icon: BallotIcon, name: 'Ballot' },
  { Icon: BarChartIcon, name: 'BarChart' },
  { Icon: BatchPredictionIcon, name: 'BatchPrediction' },
  { Icon: BatteryAlertIcon, name: 'BatteryAlert' },
  { Icon: BatteryCharging20Icon, name: 'BatteryCharging20' },
  { Icon: BatteryCharging30Icon, name: 'BatteryCharging30' },
  { Icon: BatteryCharging50Icon, name: 'BatteryCharging50' },
  { Icon: BatteryCharging60Icon, name: 'BatteryCharging60' },
  { Icon: BatteryCharging80Icon, name: 'BatteryCharging80' },
  { Icon: BatteryCharging90Icon, name: 'BatteryCharging90' },
  { Icon: BatteryChargingFullIcon, name: 'BatteryChargingFull' },
  { Icon: BatteryFullIcon, name: 'BatteryFull' },
  { Icon: BatteryStdIcon, name: 'BatteryStd' },
  { Icon: BatteryUnknownIcon, name: 'BatteryUnknown' },
  { Icon: BeachAccessIcon, name: 'BeachAccess' },
  { Icon: BedtimeIcon, name: 'Bedtime' },
  { Icon: BeenhereIcon, name: 'Beenhere' },
  { Icon: BentoIcon, name: 'Bento' },
  { Icon: BikeScooterIcon, name: 'BikeScooter' },
  { Icon: BiotechIcon, name: 'Biotech' },
  { Icon: BlockIcon, name: 'Block' },
  { Icon: BluetoothIcon, name: 'Bluetooth' },
  { Icon: BluetoothAudioIcon, name: 'BluetoothAudio' },
  { Icon: BluetoothConnectedIcon, name: 'BluetoothConnected' },
  { Icon: BluetoothDisabledIcon, name: 'BluetoothDisabled' },
  { Icon: BluetoothSearchingIcon, name: 'BluetoothSearching' },
  { Icon: BlurCircularIcon, name: 'BlurCircular' },
  { Icon: BlurLinearIcon, name: 'BlurLinear' },
  { Icon: BlurOffIcon, name: 'BlurOff' },
  { Icon: BlurOnIcon, name: 'BlurOn' },
  { Icon: CameraRollIcon, name: 'CameraRoll' },
  { Icon: CampaignIcon, name: 'Campaign' },
  { Icon: CancelIcon, name: 'Cancel' },
  { Icon: CancelPresentationIcon, name: 'CancelPresentation' },
  { Icon: CancelScheduleSendIcon, name: 'CancelScheduleSend' },
  { Icon: CardGiftcardIcon, name: 'CardGiftcard' },
  { Icon: CardMembershipIcon, name: 'CardMembership' },
  { Icon: CardTravelIcon, name: 'CardTravel' },
  { Icon: CarpenterIcon, name: 'Carpenter' },
  { Icon: CasinoIcon, name: 'Casino' },
  { Icon: CastIcon, name: 'Cast' },
  { Icon: CastConnectedIcon, name: 'CastConnected' },
  { Icon: CastForEducationIcon, name: 'CastForEducation' },
  { Icon: CategoryIcon, name: 'Category' },
  { Icon: CelebrationIcon, name: 'Celebration' },
  { Icon: CellWifiIcon, name: 'CellWifi' },
  { Icon: CenterFocusStrongIcon, name: 'CenterFocusStrong' },
  { Icon: CenterFocusWeakIcon, name: 'CenterFocusWeak' },
  { Icon: ChangeHistoryIcon, name: 'ChangeHistory' },
  { Icon: ChargingStationIcon, name: 'ChargingStation' },
  { Icon: ChatIcon, name: 'Chat' },
  { Icon: ChatBubbleIcon, name: 'ChatBubble' },
  { Icon: ChatBubbleOutlineIcon, name: 'ChatBubbleOutline' },
  { Icon: CheckIcon, name: 'Check' },
  { Icon: CheckBoxIcon, name: 'CheckBox' },
  { Icon: CheckBoxOutlineBlankIcon, name: 'CheckBoxOutlineBlank' },
  { Icon: CheckCircleIcon, name: 'CheckCircle' },
  { Icon: CheckCircleOutlineIcon, name: 'CheckCircleOutline' },
  { Icon: CheckroomIcon, name: 'Checkroom' },
  { Icon: ChevronLeftIcon, name: 'ChevronLeft' },
  { Icon: ChevronRightIcon, name: 'ChevronRight' },
  { Icon: ChildCareIcon, name: 'ChildCare' },
  { Icon: ChildFriendlyIcon, name: 'ChildFriendly' },
  { Icon: ChromeReaderModeIcon, name: 'ChromeReaderMode' },
  { Icon: CircleIcon, name: 'Circle' },
  { Icon: ClearIcon, name: 'Clear' },
  { Icon: ClearAllIcon, name: 'ClearAll' },
  { Icon: CloseIcon, name: 'Close' },
  { Icon: ClosedCaptionIcon, name: 'ClosedCaption' },
  { Icon: CloudIcon, name: 'Cloud' },
  { Icon: CloudCircleIcon, name: 'CloudCircle' },
  { Icon: CloudDoneIcon, name: 'CloudDone' },
  { Icon: CloudDownloadIcon, name: 'CloudDownload' },
  { Icon: CloudOffIcon, name: 'CloudOff' },
  { Icon: CloudQueueIcon, name: 'CloudQueue' },
  { Icon: CloudUploadIcon, name: 'CloudUpload' },
  { Icon: CodeIcon, name: 'Code' },
  { Icon: CollectionsIcon, name: 'Collections' },
  { Icon: CollectionsBookmarkIcon, name: 'CollectionsBookmark' },
  { Icon: ColorLensIcon, name: 'ColorLens' },
  { Icon: ColorizeIcon, name: 'Colorize' },
  { Icon: CommentIcon, name: 'Comment' },
  { Icon: CommentBankIcon, name: 'CommentBank' },
  { Icon: CommuteIcon, name: 'Commute' },
  { Icon: CompareIcon, name: 'Compare' },
  { Icon: CompareArrowsIcon, name: 'CompareArrows' },
  { Icon: CompassCalibrationIcon, name: 'CompassCalibration' },
  { Icon: ComputerIcon, name: 'Computer' },
  { Icon: ConfirmationNumberIcon, name: 'ConfirmationNumber' },
  { Icon: ConnectWithoutContactIcon, name: 'ConnectWithoutContact' },
  { Icon: ConstructionIcon, name: 'Construction' },
  { Icon: ContactMailIcon, name: 'ContactMail' },
  { Icon: ContactPageIcon, name: 'ContactPage' },
  { Icon: ContactPhoneIcon, name: 'ContactPhone' },
  { Icon: ContactSupportIcon, name: 'ContactSupport' },
  { Icon: ContactlessIcon, name: 'Contactless' },
  { Icon: ContactsIcon, name: 'Contacts' },
  { Icon: ContentCopyIcon, name: 'ContentCopy' },
  { Icon: ContentCutIcon, name: 'ContentCut' },
  { Icon: ContentPasteIcon, name: 'ContentPaste' },
  { Icon: ControlCameraIcon, name: 'ControlCamera' }
];
const styleSubmitBtn = {

  backgroundColor: "#804bdf",
  color: "#fff",
  '&:hover': {
    backgroundColor: '#4a17a7'
  }
}

const IconComponent = () => {
  return (
    <WrappComponent>
      <div className="iconComponent-container">
        <div className="icon">
          {iconArray.map((Item, index) => {



            return (
              <div className="item" key={index}>
                <Tooltip title={Item.name}>
                  <IconButton>
                    <Item.Icon />
                  </IconButton>
                </Tooltip>
              </div>
            )
          })}
        </div>

        <Button
          target='_blank'
          rel='noreferrer'
          component={Link}
          sx={styleSubmitBtn}
          variant='contained'
          href='https://mui.com/material-ui/material-icons/'
        >
          Xem thêm tất cả icon tại đây!
        </Button>



      </div>
    </WrappComponent>
  )
}

export default IconComponent