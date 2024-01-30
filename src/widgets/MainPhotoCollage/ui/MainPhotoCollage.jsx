import GraphicGroup from '~/shared/assets/graphic-group-2.png'
import styles from './MainPhotoCollage.module.css'

const MainPhotoCollage = () => {
    return (
        <div className={styles.mainPhotoCollage}>
            <img
                src={GraphicGroup}
                className={styles.graphicGroup}
                alt="photo collage"
                draggable={false}
            />
        </div>
    )
}

export default MainPhotoCollage
