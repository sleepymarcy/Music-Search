import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { TrackDetails } from '../interfaces/index'
import { Container, Row, Image, Col, Table } from 'react-bootstrap'
import '../css/details.css'

export default function DetailPage() {
  const { id } = useParams()

  const [trackDetails, setTrackDetails] = useState<TrackDetails | null>(null)

  const fetchData = async () => {
    const response = await fetch(
      'https://striveschool-api.herokuapp.com/api/deezer/track/' + id
    )

    if (!response.ok) return

    const data = await response.json()
    setTrackDetails(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return trackDetails ? (
    <Container>
      <Row className="mt-5">
        <Col>
          <Image fluid src={trackDetails.album.cover_big} />
        </Col>
        <Col>
          <Table bordered variant='dark'>
            <tbody>
              <tr>
                <td>Title</td>
                <th>{trackDetails.title}</th>
              </tr>
              <tr>
                <td>Artist</td>
                <th>{trackDetails.artist.name}</th>
              </tr>
              <tr>
                <td>Album</td>
                <th>{trackDetails.album.title}</th>
              </tr>
              <tr>
                <td>Duration</td>
                <th>{trackDetails.duration}s</th>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  ) : null
}


//  <ListGroup variant="flush" >
//  <ListGroup.Item>Title: {trackDetails.title}</ListGroup.Item>
//  <ListGroup.Item>Artist: {trackDetails.artist.name}</ListGroup.Item>
//  <ListGroup.Item>Song: {trackDetails.album.title}</ListGroup.Item>
//  <ListGroup.Item>Duration: {trackDetails.duration}s</ListGroup.Item>
//  <ListGroup.Item>Release Date: {trackDetails.release_date}</ListGroup.Item>
// </ListGroup>