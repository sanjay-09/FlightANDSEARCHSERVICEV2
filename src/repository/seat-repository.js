const { sequelize } = require("../models/index");
const { Seat } = require("../models/index");
class SeatRepository {
  async lockRows(data) {
    const { flight_id, totalSeats } = data;
    const transaction = await sequelize.transaction();

    try {
      const seats = await Seat.findAll({
        where: {
          flight_id,
          status: "AVAILABLE",
        },
        limit: parseInt(totalSeats),
        lock: transaction.LOCK.UPDATE,
        transaction,
      });
      console.log(seats);

      if (seats.length < totalSeats) {
        throw new Error("Not enough seats");
      }

      const seatIds = [];
      for (const seat of seats) {
        seat.status = "LOCKED";
        await seat.save({ transaction });
        seatIds.push(seat.id);
      }

      await transaction.commit();

      return seatIds;
    } catch (err) {
      console.log(err);

      await transaction.rollback();
      throw err;
    }
  }
  async confirmSeats(data) {
    try {
      const { seatIds } = data;

      await Seat.update({ status: "BOOKED" }, { where: { id: seatIds } });
    } catch (err) {
      throw err;
    }
  }

  async releaseSeats(data) {
    try {
      const { seatIds } = data;

      await Seat.update({ status: "AVAILABLE" }, { where: { id: seatIds } });
    } catch (err) {
      throw err;
    }
  }
}
module.exports = SeatRepository;
